import SEO from '@App/components/elements/SEO'
import ProjectsPage from '@App/components/pages/ProjectsPage'

export default function Projects(): JSX.Element {
  return (
    <>
      <SEO
        title='Projetos | Renovaíh'
        description='No Renovaih você aprender sobre ambientes se divertindo'
      />

      <ProjectsPage />
    </>
  )
}
