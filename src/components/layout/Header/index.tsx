import { ButtonSignIn } from '@App/components/elements/ButtonSignIn'
import { useState } from 'react'
import NavItem from './NavItem'

export function Header(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='bg-primary-300 py-8 px-4 md:px-6 lg:px-8'>
      <nav className='max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative'>
        <span className='text-3xl text-secondary font-bold'>Renovaih</span>

        <div
          className={`flex ${
            menuOpen ? 'flex-col my-4' : 'hidden'
          } md:flex gap-5`}
        >
          <NavItem href='/' title='Início' />
          <NavItem href='/projetos' title='Projetos' />
        </div>

        <button
          type='button'
          className='block absolute right-1 md:hidden p-3 space-y-2 bg-primary-200 rounded shadow cursor-pointer'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className='block w-6 h-0.5 bg-primary-100 animate-pulse' />
          <span className='block w-6 h-0.5 bg-primary-100 animate-pulse' />
          <span className='block w-6 h-0.5 bg-primary-100 animate-pulse' />
        </button>

        <ButtonSignIn />
      </nav>
    </header>
  )
}
