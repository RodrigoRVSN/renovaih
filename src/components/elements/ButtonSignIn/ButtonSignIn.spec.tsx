import { render, screen, fireEvent } from '@testing-library/react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { usersMock } from '@App/tests/__mocks__/usersMock';
import { ButtonSignIn } from '.';

jest.mock('next/router');
jest.mock('next-auth/react');

describe('<ButtonSignIn />', () => {
  it('Should redirect to profile page in authenticated session', () => {
    const useRouterMocked = jest.mocked(useRouter);
    const pushMock = jest.fn();

    useRouterMocked.mockReturnValueOnce({
      push: pushMock,
    } as any);

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

    render(<ButtonSignIn />);

    fireEvent.click(screen.getByText(/Perfil/i));
    expect(pushMock).toBeCalledWith('/profile');
  });

  it('Should create a session', () => {
    const useSessionMocked = jest.mocked(useSession);
    const signInMocked = jest.mocked(signIn);

    useSessionMocked.mockReturnValue({
      data: null,
      status: 'unauthenticated',
    });

    render(<ButtonSignIn />);

    fireEvent.click(screen.getByText(/Entrar/i));
    expect(signInMocked).toBeCalledWith('google');
  });

  it('Should render loading spinner getting session', () => {
    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValue({
      data: null,
      status: 'loading',
    });

    render(<ButtonSignIn />);

    expect(screen.getByTestId('loading_spinner')).toBeInTheDocument();
  });
});
