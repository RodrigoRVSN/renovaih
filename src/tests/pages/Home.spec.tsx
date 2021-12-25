import Home from '@App/pages'
import { render } from '@testing-library/react'

jest.mock('next-auth/react', () => {
  return {
    useSession: () => [null, false]
  }
})

describe('Home page', () => {
  it('should renders correctly', () => {
    render(<Home />)
  })
})
