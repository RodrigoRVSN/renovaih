import { render, screen } from '@testing-library/react';
import { getPrismicClient } from '@App/core/services/prismic';
import Home, { getStaticProps } from '@App/pages';
import { postsMock } from '../__mocks__/postsMock';
import '../utils/intersectionObserver';

jest.mock('next-auth/react', () => ({
  useSession: () => [null, false],
}));
jest.mock('@App/core/services/prismic');

describe('Home Page', () => {
  it('Should render HomePage correctly', async () => {
    render(<Home posts={postsMock} />);
    expect(screen.getByText(/energia solar/i)).toBeInTheDocument();
  });

  it('Should load the initial data in Home', async () => {
    const getPrismicClientMocked = jest.mocked(getPrismicClient);

    getPrismicClientMocked.mockResolvedValueOnce({
      getAllByType: jest.fn().mockResolvedValueOnce([
        {
          uid: 'new-post',
          data: {
            title: [{ text: '1' }],
            summary: [{ text: '1' }],
            post_image: { url: 'zoro.png' },
          },
        },
      ]),
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [
            {
              slug: 'new-post',
              title: '1',
              summary: '1',
              image: 'zoro.png',
            },
          ],
        },
      })
    );

    render(<Home posts={postsMock} />);
    expect(screen.getByText(/energia solar/i)).toBeInTheDocument();
  });
});
