import { render, screen } from '@testing-library/react';
import { usersMock } from '@App/tests/__mocks__/usersMock';
import { CardRankingUser } from '.';

describe('<CardRankingUser />', () => {
  it('should be able to render User Card in ranking correctly', () => {
    render(<CardRankingUser index={1} user={usersMock[0]} />);

    expect(screen.getByAltText(/Foto de Rodrigo Victor/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      '/renovaih-academ-rodrigorvsn.vercel.app/zoro.png'
    );

    expect(screen.getByText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/Rodrigo Victor/i)).toBeInTheDocument();
    expect(screen.getByText(/9000/i)).toBeInTheDocument();
  });
});
