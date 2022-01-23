import { render, screen, fireEvent } from '@testing-library/react'
import { projectStepsContentMock } from '@App/tests/__mocks__/projectsMock'
import '@App/tests/utils/intersectionObserver'
import { useSession } from 'next-auth/react'
import { usersMock } from '@App/tests/__mocks__/usersMock'
import ProjectStepsPage from '.'

jest.mock('next-auth/react')

const setup = () => {
  const useSessionMocked = jest.mocked(useSession)
  useSessionMocked.mockReturnValue({
    data: {
      user: {
        ...usersMock[0]
      },
      expires: '1000'
    },
    status: 'authenticated'
  })

  const view = render(
    <ProjectStepsPage
      project={projectStepsContentMock.project}
      content={projectStepsContentMock.content}
    />
  )

  const buttonPrevious = screen.getByTestId(/step__previous/i)
  const buttonNext = screen.getByTestId(/step__next/i)

  return { buttonPrevious, buttonNext, ...view }
}

describe('<ProjectStepsPage />', () => {
  it('Should change steps and render the content + title', async () => {
    const { buttonPrevious, buttonNext } = setup()

    expect(screen.getByText(/protetor solar caseiro/i)).toBeInTheDocument()
    expect(screen.getByText(/fala galerinha/i)).toBeInTheDocument()

    expect(buttonPrevious).toBeDisabled()
    expect(screen.queryByText(/voltar/i)).not.toBeInTheDocument()

    fireEvent.click(buttonNext)
    expect(buttonPrevious).toBeEnabled()
    expect(screen.queryByText(/fala galerinha/i)).not.toBeInTheDocument()
    expect(screen.getByText(/passo 2/i)).toBeInTheDocument()
    expect(buttonNext).toBeDisabled()
    expect(screen.getByText(/voltar/i)).toBeInTheDocument()
  })
})
