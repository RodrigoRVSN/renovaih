import Head from 'next/head'

interface ISeo {
  title: string
  description?: string
}

export default function SEO({ title, description }: ISeo): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />

      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta
        name='viewport'
        content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5'
      />
      <meta name='google' content='notranslate' />

      <meta name='og:title' content={title} />
      <meta name='og:description' content={description} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@rodrigovictor81' />
      <meta name='twitter:creator' content='@rodrigovictor81' />
      <meta name='twitter:image:alt' content='Thumbnail' />
      <meta name='twitter:image:width' content='1200' />
      <meta name='twitter:image:height' content='620' />
    </Head>
  )
}
