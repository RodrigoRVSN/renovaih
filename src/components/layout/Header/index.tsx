import { ButtonSignIn } from '@App/components/elements/ButtonSignIn'
import { useState } from 'react'
import NavItem from './NavItem'

export function Header(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='bg-primary-300 py-xs px-xxs lg:px-xs'>
      <nav className='max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative'>
        <span className='text-3xl text-secondary font-bold'>Renovaih</span>

        <div
          className={`flex ${
            menuOpen ? 'flex-col my-xxs' : 'hidden'
          } md:flex gap-xs`}
        >
          <NavItem href='/' title='Início' />
          <NavItem href='/projects' title='Projetos' />
        </div>

        <button
          type='button'
          className='absolute bg-primary-200 block md:hidden p-xs right-xxs space-y-xxs  rounded shadow cursor-pointer'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className='block w-xmd h-xxs bg-primary-100 animate-pulse' />
          <span className='block w-xmd h-xxs bg-primary-100 animate-pulse' />
          <span className='block w-xmd h-xxs bg-primary-100 animate-pulse' />
        </button>

        <ButtonSignIn />
      </nav>
    </header>
  )
}
