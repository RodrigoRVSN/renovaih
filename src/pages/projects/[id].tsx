import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-dom';
import SEO from '@App/components/elements/SEO';
import ProjectStepsPage from '@App/components/pages/ProjectStepsPage';
import { getPrismicClient } from '@App/core/services/prismic';
import {
  IPrismicProject,
  IProjectStepsPageProps,
} from '@App/core/types/IProjects';

export default function Project({
  content,
}: IProjectStepsPageProps): JSX.Element {
  const router = useRouter();
  const { project_title } = router.query;

  return (
    <>
      <SEO
        title={`${project_title} | Renovaih`}
        description={`Veja sobre o conteúdo de ${project_title} em nosso site!`}
      />

      <ProjectStepsPage project={String(project_title)} content={content} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: ['/projects/1', '/projects/2'],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const prismic = await getPrismicClient();
  const { data } = (await prismic.getByUID(
    'projects',
    String(params?.id)
  )) as unknown as IPrismicProject;

  const content = data.steps.map((step, index) => ({
    id: index,
    step: RichText.asHtml(step.step),
  }));

  return {
    props: {
      content,
    },
  };
};
