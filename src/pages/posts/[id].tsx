import { getPrismicClient } from '@App/core/services/prismic'
import { IPrismic } from '@App/core/types/IPosts'
import { GetStaticProps } from 'next'

export default function Post(): JSX.Element {
  return <h1>oi</h1>
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { id } = params

  const prismic = await getPrismicClient()
  const prismicContent = prismic.getByUID('posts', id) as unknown as IPrismic[]

  const posts = prismicContent.map((post) => {
    const { data } = post
    return {
      slug: post.uid,
      title: data.title[0].text,
      summary: data.summary[0].text,
      image: data.post_image.url
    }
  })
  console.log(posts)

  return {
    props: {
      posts
    }
  }
}
