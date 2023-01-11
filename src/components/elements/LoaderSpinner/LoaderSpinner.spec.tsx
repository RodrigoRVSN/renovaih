import { render } from '@testing-library/react';
import { LoaderSpinner } from '.';

describe('<LoaderSpinner />', () => {
  it('Should load the spinner in loading true', () => {
    const { container } = render(<LoaderSpinner loading />);

    expect(container.firstChild).toHaveClass('flex');
  });

  it('Should not load the spinner in loading false', () => {
    const { container } = render(<LoaderSpinner loading={false} />);

    expect(container.firstChild).not.toHaveClass('flex');
  });
});
