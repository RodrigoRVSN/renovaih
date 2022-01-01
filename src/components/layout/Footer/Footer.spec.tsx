import { Footer } from '@App/components/layout/Footer'
import { render, screen } from '@testing-library/react'
import { socialList } from './Footer.config'

describe('<Footer />', () => {
  it('Should render footer correctly', () => {
    render(<Footer />)

    socialList.forEach((e) => {
      expect(screen.getByText(e.title)).toBeInTheDocument()
    })
  })
})
