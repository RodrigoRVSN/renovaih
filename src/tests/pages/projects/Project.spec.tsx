import { getPrismicClient } from '@App/core/services/prismic'
import Project, {
  getStaticPaths,
  getStaticProps
} from '@App/pages/projects/[id]'
import { projectStepsContentMock } from '@App/tests/__mocks__/projectsMock'
import { render, screen } from '@testing-library/react'
import { useRouter } from 'next/router'

jest.mock('next/router')
jest.mock('@App/core/services/prismic')

const setup = () => {
  const useRouterMocked = jest.mocked(useRouter)
  useRouterMocked.mockReturnValueOnce({
    query: {
      project_title: 'project_title'
    }
  } as any)

  const view = render(<Project content={projectStepsContentMock.content} />)

  return { ...view }
}

describe('Project Page', () => {
  it('Should render Project Page correctly', async () => {
    setup()

    expect(screen.getByText(/project_title/i)).toBeInTheDocument()
    expect(screen.getByText(/fala galerinha/i)).toBeInTheDocument()
  })

  it('Should load initial project data', async () => {
    setup()

    const getPrismicClientMocked = jest.mocked(getPrismicClient)

    getPrismicClientMocked.mockResolvedValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          steps: [
            {
              step: [
                {
                  type: 'paragraph',
                  text: 'step_content',
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
          content: [
            {
              id: 0,
              step: '<p>step_content</p>'
            }
          ]
        }
      })
    )

    expect(responsePaths).toEqual(
      expect.objectContaining({
        paths: ['/projects/1', '/projects/2']
      })
    )
  })
})
