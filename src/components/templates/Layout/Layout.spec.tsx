import { render, screen } from '@testing-library/react'
import Layout from '.'

jest.mock('next-auth/react', () => {
  return {
    useSession: () => [null, false]
  }
})

describe('<Layout>{children}</Layout>', () => {
  it('Should render the layout children', () => {
    render(
      <Layout>
        <h1>Children of Layout</h1>
      </Layout>
    )

    expect(screen.getByText(/Children of Layout/i)).toBeInTheDocument()
  })
})
