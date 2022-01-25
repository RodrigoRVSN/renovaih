import { getPrismicClient } from '@App/core/services/prismic'
import Post, { getStaticPaths, getStaticProps } from '@App/pages/posts/[id]'
import { render, screen } from '@testing-library/react'
import { postsMock } from '../__mocks__/postsMock'

jest.mock('@App/core/services/prismic')

describe('Post Page', () => {
  it('Should render Post Page correctly', async () => {
    render(<Post post={postsMock[0]} />)
    expect(screen.getByText(/energia solar/i)).toBeInTheDocument()
  })

  it('Should load the initial data in Home', async () => {
    const getPrismicClientMocked = jest.mocked(getPrismicClient)

    getPrismicClientMocked.mockResolvedValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [{ text: 'title-post' }],
          content: [
            {
              post_content: [
                {
                  type: 'paragraph',
                  text: 'sustentabilidade fluxo',
                  spans: []
                }
              ]
            }
          ]
        }
      })
    } as any)

    const response = await getStaticProps({})
    const responsePaths = await getStaticPaths({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            title: 'title-post',
            content: '<p>sustentabilidade fluxo</p>'
          }
        }
      })
    )

    expect(responsePaths).toEqual(
      expect.objectContaining({
        paths: ['/posts/1', '/posts/2']
      })
    )
  })
})
