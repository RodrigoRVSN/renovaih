import { render, fireEvent, screen } from '@testing-library/react';
import { ErrorGeneric } from '.';

describe('<ErrorGeneric />', () => {
  it('Should render correctly Generic Error', () => {
    const fn = jest.fn();

    render(<ErrorGeneric title="Request error" refetch={fn} />);

    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByRole('button'));

    expect(fn).toBeCalledTimes(2);
    expect(screen.getByText(/Request error/i)).toBeInTheDocument();
  });
});
