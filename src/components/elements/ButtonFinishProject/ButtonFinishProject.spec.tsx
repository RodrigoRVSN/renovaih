import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AxiosMock from 'axios-mock-adapter';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { apiAxios, baseURL } from '@App/core/services/api';
import { usersMock } from '@App/tests/__mocks__/usersMock';
import '@App/tests/utils/intersectionObserver';
import { ButtonFinishProject } from '.';

jest.mock('next/router');
jest.mock('next-auth/react');

const apiMock = new AxiosMock(apiAxios);

describe('<ButtonFinishProject />', () => {
  it('Should start a project available and redirect to page', async () => {
    const useRouterMocked = jest.mocked(useRouter);
    const useSessionMocked = jest.mocked(useSession);
    const pushMock = jest.fn();

    useRouterMocked.mockReturnValueOnce({
      replace: pushMock,
    } as any);

    useSessionMocked.mockReturnValue({
      data: {
        user: {
          ...usersMock[0],
        },
        expires: '1000',
      },
      status: 'authenticated',
    });

    apiMock
      .onPut(`${baseURL}/projects`)
      .replyOnce(200, { data: { points: 3 } });

    render(<ButtonFinishProject />);

    fireEvent.click(screen.getByText(/Voltar/i));

    await waitFor(() => {
      expect(pushMock).toBeCalledWith('/');
    });
  });
});
