import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { usersMock } from '@App/tests/__mocks__/usersMock';
import { UserProfile } from '.';

jest.mock('next/router');
jest.mock('next-auth/react');

const setup = () => {
  const useSessionMocked = jest.mocked(useSession);

  useSessionMocked.mockReturnValue({
    data: {
      user: {
        ...usersMock[0],
      },
      expires: '1000',
    },
    status: 'authenticated',
  });

  const useRouterMocked = jest.mocked(useRouter);
  const replaceMock = jest.fn();

  useRouterMocked.mockReturnValueOnce({
    replace: replaceMock,
  } as any);

  const view = render(<UserProfile user={usersMock[0]} />);

  const buttonSignOut = screen.getByAltText(/Ícone de sair/i);

  return { buttonSignOut, replaceMock, ...view };
};

describe('<UserProfile />', () => {
  it('Should render user profile correctly', () => {
    setup();

    expect(screen.getByText(/Rodrigo Victor/i)).toBeInTheDocument();
    expect(screen.getByText(/rodrigovictor81@gmail.com/i)).toBeInTheDocument();
  });

  it('Should redirect in signOut', async () => {
    const { replaceMock, buttonSignOut } = setup();

    fireEvent.click(buttonSignOut);

    await waitFor(() => {
      expect(replaceMock).toBeCalledWith('/');
    });
  });
});
