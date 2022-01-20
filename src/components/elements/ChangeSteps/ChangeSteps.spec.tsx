import { render, screen, fireEvent } from '@testing-library/react'
import { ChangeSteps } from '.'

const mockActualtStep = jest.fn()

const setup = () => {
  const view = render(
    <ChangeSteps
      actualStep={0}
      setActualStep={mockActualtStep}
      projects_length={2}
    />
  )

  const buttonPrevious = screen.getByTestId('previous')
  const buttonNext = screen.getByTestId('next')

  return {
    buttonPrevious,
    buttonNext,
    ...view
  }
}

describe('<ChangeSteps />', () => {
  it('Should render buttons to change Steps correctly', () => {
    const { buttonPrevious, buttonNext } = setup()

    expect(buttonPrevious).toBeInTheDocument()
    expect(buttonNext).toBeInTheDocument()
  })

  it('Should not click in disabled  button', async () => {
    const { buttonPrevious, buttonNext } = setup()

    fireEvent.click(buttonPrevious)
    expect(buttonPrevious).toHaveProperty('disabled')
    expect(mockActualtStep).toBeCalledTimes(0)

    fireEvent.click(buttonNext)
    expect(mockActualtStep).toBeCalledTimes(1)
  })
})
