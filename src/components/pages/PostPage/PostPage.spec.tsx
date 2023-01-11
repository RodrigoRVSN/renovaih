import { render, screen } from '@testing-library/react';
import { postsMock } from '@App/tests/__mocks__/postsMock';
import '@App/tests/utils/intersectionObserver';
import { PostPage } from '.';

describe('<PostPage />', () => {
  it('Should render post page correctly', () => {
    render(<PostPage post={postsMock[0]} />);

    expect(screen.getByText(/Energia solar/i)).toBeInTheDocument();
    expect(screen.getByText(/oi/i)).toBeInTheDocument();
  });
});
