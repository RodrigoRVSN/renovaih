import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import '@App/core/styles/tailwind.css'
import Layout from '@App/components/templates/Layout'

function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps): JSX.Element {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
