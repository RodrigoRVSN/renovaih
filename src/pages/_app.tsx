import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '@App/core/styles/tailwind.css';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
