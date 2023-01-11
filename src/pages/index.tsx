/* eslint-disable testing-library/no-await-sync-query */
import { GetStaticProps } from 'next';
import SEO from '@App/components/elements/SEO';
import HomePage from '@App/components/pages/HomePage';
import { getPrismicClient } from '@App/core/services/prismic';
import { IPrismic, PostProps } from '@App/core/types/IPosts';

export default function Home({ posts }: PostProps): JSX.Element {
  return (
    <>
      <SEO
        title="Início | Renovaíh"
        description="No Renovaih você aprender sobre ambientes se divertindo"
      />

      <HomePage posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = await getPrismicClient();
  const prismicContent = (await prismic.getAllByType(
    'posts'
  )) as unknown as IPrismic[];

  const posts = prismicContent.map((post) => {
    const { data } = post;
    return {
      slug: post.uid,
      title: data.title[0].text,
      summary: data.summary[0].text,
      image: data.post_image.url,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
