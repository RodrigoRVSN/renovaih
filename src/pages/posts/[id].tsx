/* eslint-disable testing-library/no-await-sync-query */
import SEO from '@App/components/elements/SEO'
import { PostPage } from '@App/components/pages/PostPage'
import { getPrismicClient } from '@App/core/services/prismic'
import { IPrismic, PostPageProps } from '@App/core/types/IPosts'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { RichText } from 'prismic-dom'

export default function Post({ post }: PostPageProps): JSX.Element {
  return (
    <>
      <SEO
        title={`${post.title} | Renovaih`}
        description={`Veja sobre o conteúdo de ${post.title} em nosso site!`}
      />

      <PostPage post={post} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['/posts/1', '/posts/2', '/posts/3'],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({
  params
}: GetStaticPropsContext) => {
  const prismic = await getPrismicClient()
  const { data } = (await prismic.getByUID(
    'posts',
    String(params?.id)
  )) as unknown as IPrismic

  const post = {
    title: data.title[0].text,
    content: RichText.asHtml(data.content[0].post_content)
  }

  return {
    props: {
      post
    }
  }
}
