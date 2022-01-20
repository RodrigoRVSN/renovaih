import { screen, render } from '@testing-library/react'
import { ButtonToggleTheme } from '.'

describe('<ButtonToggleTheme />', () => {
  it('Should render light theme correctly', () => {
    render(<ButtonToggleTheme />)

    expect(screen.getByText(/claro/i)).toBeInTheDocument()
  })
})
