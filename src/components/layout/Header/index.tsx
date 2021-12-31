import { ButtonSignIn } from '@App/components/elements/ButtonSignIn'
import { useState } from 'react'
import NavItem from './NavItem'

export function Header(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='bg-primary flex flex-col md:flex-row items-center justify-between px-xxxlg py-xmd relative'>
      <span className='text-3xl text-text_contrast font-bold'>Renovaih</span>

      <nav
        className={`flex ${
          menuOpen ? 'flex-col my-xxs' : 'hidden'
        } md:flex gap-xs items-center`}
      >
        <NavItem href='/' title='Início' />
        <NavItem href='/projects' title='Projetos' />

        <ButtonSignIn />
      </nav>

      <button
        type='button'
        className='absolute bg-card block md:hidden p-xs right-xxs space-y-xxs  rounded shadow cursor-pointer'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className='block w-xmd h-xxs bg-primary animate-pulse' />
        <span className='block w-xmd h-xxs bg-primary animate-pulse' />
        <span className='block w-xmd h-xxs bg-primary animate-pulse' />
      </button>
    </header>
  )
}
