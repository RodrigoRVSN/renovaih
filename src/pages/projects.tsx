import SEO from '@App/components/elements/SEO'
import ProjectsPage from '@App/components/pages/ProjectsPage'
import { mockedProjects } from '@App/tests/__mocks__/projectsMock'

export default function Projects(): JSX.Element {
  return (
    <>
      <SEO
        title='Projetos | Renovaíh'
        description='No Renovaih você aprender sobre ambientes se divertindo'
      />
      <ProjectsPage projects={mockedProjects} />
    </>
  )
}
