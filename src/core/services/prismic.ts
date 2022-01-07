import * as Prismic from '@prismicio/client'

export async function getPrismicClient(): Promise<Prismic.Client> {
  const endpoint = Prismic.getEndpoint(String(process.env.PRISMIC_ENDPOINT))

  const client = Prismic.createClient(endpoint, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetch
  })

  return client
}
