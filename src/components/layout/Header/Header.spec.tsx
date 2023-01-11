import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '@App/components/layout/Header';
import NavItem from '@App/components/layout/Header/NavItem';

jest.mock('next-auth/react', () => ({
  useSession: () => [null, false],
}));

describe('<Header />', () => {
  it('Should render header correctly', () => {
    render(<Header />);

    expect(screen.getByText(/renovaih/i)).toBeInTheDocument();
    expect(screen.getByText(/início/i)).toHaveAttribute('href', '/');
    expect(screen.getByText(/projetos/i)).toHaveAttribute('href', '/projects');
  });

  it('Should render nav item correctly', () => {
    render(<NavItem href="/profile" title="Perfil" />);

    expect(screen.getByText(/perfil/i)).toHaveAttribute('href', '/profile');
  });

  it('Should toggle responsive menu', () => {
    render(<Header />);

    expect(screen.getByRole('navigation')).toHaveClass('hidden');
    fireEvent.click(screen.getByTestId('toggle__button'));
    expect(screen.getByRole('navigation')).toHaveClass('flex-col');
  });
});
