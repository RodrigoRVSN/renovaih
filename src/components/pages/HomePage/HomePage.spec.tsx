import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import { postsMock } from '@App/tests/__mocks__/postsMock';
import '@App/tests/utils/intersectionObserver';
import HomePage from '.';

jest.mock('next/router');

describe('<HomePage />', () => {
  it('Should render home page correctly', () => {
    render(<HomePage posts={postsMock} />);

    postsMock.forEach((post) =>
      expect(screen.getByText(post.title)).toBeInTheDocument()
    );
  });

  it('Should redirect do /posts/[id] on button click', () => {
    const useRouterMocked = jest.mocked(useRouter);
    const pushMock = jest.fn();

    useRouterMocked.mockReturnValueOnce({
      push: pushMock,
    } as any);

    render(<HomePage posts={postsMock} />);

    postsMock.forEach((post) =>
      expect(screen.getByText(post.title)).toBeInTheDocument()
    );

    fireEvent.click(screen.getAllByText(/Bora trabalhar!/i)[0]);
    expect(pushMock).toBeCalledWith('/posts/1');
  });
});
