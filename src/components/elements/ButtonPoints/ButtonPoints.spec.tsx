import { render, screen } from '@testing-library/react';
import { ButtonPoints } from '.';

describe('<ButtonPoints />', () => {
  it('Should render button points', () => {
    const { container } = render(
      <ButtonPoints points={3000} className="mb-lg" />
    );

    expect(screen.getByText(3000)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('mb-lg');
  });
});
