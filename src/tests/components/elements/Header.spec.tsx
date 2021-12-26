import { Header } from '@App/components/layout/Header'
import NavItem from '@App/components/layout/Header/NavItem'
import { render, screen } from '@testing-library/react'

jest.mock('next-auth/react', () => {
  return {
    useSession: () => [null, false]
  }
})

describe('<Header />', () => {
  it('Should render header correctly', () => {
    render(<Header />)

    expect(screen.getByText(/renovaih/i)).toBeInTheDocument()
    expect(screen.getByText(/início/i)).toHaveAttribute('href', '/')
    expect(screen.getByText(/projetos/i)).toHaveAttribute('href', '/projects')
  })

  it('Should render nav item correctly', () => {
    render(<NavItem href='/profile' title='Perfil' />)

    expect(screen.getByText(/perfil/i)).toHaveAttribute('href', '/profile')
  })
})
