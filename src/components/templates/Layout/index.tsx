import { Footer } from '@App/components/layout/Footer'
import { Header } from '@App/components/layout/Header'
import { ReactNode } from 'react'

interface ILayout {
  children: ReactNode
}

export default function Layout({ children }: ILayout): JSX.Element {
  return (
    <>
      <Header />
      <main className='max-w-7xl mx-auto px-xxs md:px-xs lg:px-md min-h-screen'>
        {children}
      </main>
      <Footer />
    </>
  )
}
