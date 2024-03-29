import { render, screen, waitFor } from '@testing-library/react';
import AxiosMock from 'axios-mock-adapter';
import { useSession } from 'next-auth/react';
import { apiAxios, baseURL } from '@App/core/services/api';
import { projectsMock } from '@App/tests/__mocks__/projectsMock';
import { usersMock } from '@App/tests/__mocks__/usersMock';
import { createWrapperQuery } from '@App/tests/utils/createWrapperQuery';
import '@App/tests/utils/intersectionObserver';
import ProjectsPage from '.';

jest.useRealTimers();
jest.mock('next-auth/react');

const useSessionMocked = jest.mocked(useSession);
const apiMock = new AxiosMock(apiAxios);

const setupComponent = () => {
  useSessionMocked.mockReturnValue({
    data: {
      user: {
        ...usersMock[0],
      },
      expires: '1000',
    },
    status: 'authenticated',
  });

  return render(<ProjectsPage />, {
    wrapper: createWrapperQuery(),
  });
};

describe('<ProjectsPage />', () => {
  beforeEach(() => {
    apiMock.reset();
    jest.clearAllMocks();
  });

  it('should be able to render Loading Spinner', () => {
    apiMock.onGet(`${baseURL}/projects`).replyOnce(200, projectsMock);

    setupComponent();

    expect(screen.getByTestId('loading_spinner')).toBeInTheDocument();
  });

  it('should be able to render Error Generic Message', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => null);

    apiMock.onGet(`${baseURL}/projects`).replyOnce(400);

    setupComponent();

    await waitFor(() => {
      expect(
        screen.getByText(
          /Houve um erro ao carregar os projetos, tente novamente!/i
        )
      ).toBeInTheDocument();
    });
  });

  it('should be able to render Projects in success request', async () => {
    apiMock.onGet(`${baseURL}/projects`).replyOnce(200, projectsMock);

    setupComponent();

    await waitFor(() => {
      expect(screen.getByText(/energia solar/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/protetor solar/i)).toBeInTheDocument();
  });
});
