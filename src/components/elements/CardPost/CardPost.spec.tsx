import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import { postsMock } from '@App/tests/__mocks__/postsMock';
import '@App/tests/utils/intersectionObserver';
import { CardPost } from '.';

jest.mock('next/router');

const setup = () => {
  const useRouterMocked = jest.mocked(useRouter);
  const pushMock = jest.fn();

  useRouterMocked.mockReturnValueOnce({
    push: pushMock,
  } as any);

  const view = render(<CardPost post={postsMock[0]} />);

  const button = screen.getByText(/Bora trabalhar!/i);
  const title = screen.getByText(/energia solar/i);

  return {
    button,
    title,
    pushMock,
    ...view,
  };
};

describe('<CardPost />', () => {
  it('Should renders Card of Post correctly', () => {
    const { button, title } = setup();

    expect(button).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it('Should redirect to /posts/[id]', () => {
    const { button, pushMock } = setup();

    fireEvent.click(button);
    expect(pushMock).toBeCalledWith('/posts/1');
  });
});
