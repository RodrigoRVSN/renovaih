import { projectsMock } from '@App/tests/__mocks__/projectsMock'
import { render, screen, fireEvent } from '@testing-library/react'
import '@App/tests/utils/intersectionObserver'
import { useRouter } from 'next/router'
import { ButtonProject } from '.'

jest.mock('next/router')

describe('<ButtonProject />', () => {
  it('Should block user to click in a done project', () => {
    render(<ButtonProject done unavailable={false} project={projectsMock[0]} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('Should block user to click in a unavailable project', () => {
    render(<ButtonProject done={false} unavailable project={projectsMock[0]} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('Should start a project available and redirect to page', () => {
    const useRouterMocked = jest.mocked(useRouter)
    const pushMock = jest.fn()

    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any)

    render(
      <ButtonProject
        done={false}
        unavailable={false}
        project={projectsMock[0]}
      />
    )

    fireEvent.click(screen.getByText(/começar/i))
    expect(pushMock).toBeCalledWith({
      pathname: '/projects/1',
      query: { project_title: 'Energia solar' }
    })
  })
})
