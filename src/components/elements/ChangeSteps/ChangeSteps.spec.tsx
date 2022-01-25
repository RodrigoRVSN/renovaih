/* eslint-disable no-use-before-define */
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ChangeSteps } from '.'

const handleChange = jest.fn()

const setup = () => {
  const view = render(
    <ChangeSteps
      actualStep={2}
      setActualStep={handleChange}
      projects_length={4}
    />
  )

  const buttonPrevious = screen.getByTestId('step__previous')
  const buttonNext = screen.getByTestId('step__next')

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

  it('Should click buttons', async () => {
    const { buttonPrevious, buttonNext } = setup()

    fireEvent.click(buttonNext)
    fireEvent.click(buttonPrevious)

    expect(handleChange).toBeCalledTimes(2)
  })
})
