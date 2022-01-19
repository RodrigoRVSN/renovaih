import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import '@App/core/styles/tailwind.css'
import Layout from '@App/components/templates/Layout'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider, useTheme } from 'next-themes'

const queryClient = new QueryClient()

function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <ThemeProvider attribute='class'>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
