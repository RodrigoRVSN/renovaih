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
      <main className='max-w-5xl mx-auto px-4 md:px-6 lg:px-8 min-h-screen'>
        {children}
      </main>
      <Footer />
    </>
  )
}
