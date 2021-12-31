import { Footer } from '@App/components/layout/Footer'
import { render, screen } from '@testing-library/react'

describe('<Footer />', () => {
  it('Should render footer correctly', () => {
    render(<Footer />)

    expect(screen.getByText(/facebook/i)).toBeInTheDocument()
    expect(screen.getByText(/instagram/i)).toBeInTheDocument()
    expect(screen.getByText(/youtube/i)).toBeInTheDocument()
  })
})
