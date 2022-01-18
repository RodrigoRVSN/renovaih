/* eslint-disable testing-library/no-await-sync-query */
import SEO from '@App/components/elements/SEO'
import { getPrismicClient } from '@App/core/services/prismic'
import { PostPageProps } from '@App/core/types/IPosts'
import { IPrismicProject } from '@App/core/types/IProjects'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { RichText } from 'prismic-dom'

export default function Project({ project }: any): JSX.Element {
  // ! Render the project page

  console.log(project)

  return (
    <>
      <SEO
        title={`${project.title} | Renovaih`}
        description={`Veja sobre o conteúdo de ${project.title} em nosso site!`}
      />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['/projects/1', '/projects/2'],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({
  params
}: GetStaticPropsContext) => {
  const prismic = await getPrismicClient()
  const { data } = (await prismic.getByUID(
    'projects',
    String(params?.id)
  )) as unknown as IPrismicProject

  const project = {
    content: RichText.asHtml(data.steps[0].step)
  }

  return {
    props: {
      project
    }
  }
}
