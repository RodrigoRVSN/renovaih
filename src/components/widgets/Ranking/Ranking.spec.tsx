import { render, screen, waitFor } from '@testing-library/react';
import AxiosMock from 'axios-mock-adapter';
import { apiAxios, baseURL } from '@App/core/services/api';
import { usersMock } from '@App/tests/__mocks__/usersMock';
import { createWrapperQuery } from '@App/tests/utils/createWrapperQuery';
import { Ranking } from '.';

const apiMock = new AxiosMock(apiAxios);

const setup = () => {
  const view = render(<Ranking />, { wrapper: createWrapperQuery() });

  return { ...view };
};

describe('<UserProfile />', () => {
  beforeEach(() => {
    apiMock.reset();
    jest.useRealTimers();
  });

  it('should render loading state', () => {
    apiMock.onGet(`${baseURL}/users`).replyOnce(200, usersMock);

    setup();

    expect(screen.getByTestId('loading_spinner')).toBeInTheDocument();
  });

  it('should show error message', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => null);
    apiMock.onGet(`${baseURL}/users`).networkErrorOnce();

    setup();

    await waitFor(() => {
      expect(
        screen.getByText(
          /Houve um erro ao carregar o ranking, tente novamente!/i
        )
      ).toBeInTheDocument();
    });
  });
});
