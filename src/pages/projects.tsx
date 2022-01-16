import SEO from '@App/components/elements/SEO'
import ProjectsPage from '@App/components/pages/ProjectsPage'
import { IProjects } from '@App/core/types/IProjects'

const mockedProjects: IProjects[] = [
  {
    title: 'Energia solar',
    summary:
      'Explore a física com este projeto sobre a termodinâmica, que nada mais é do que o estudo da física sobre temperaturas. Venha conosco nessa aventura, é muito fácil e divertido. Vem comigo?',
    available: true,
    level: 1,
    type: 'solar'
  },
  {
    title: 'Energia solar',
    summary:
      'Explore a física com este projeto sobre a termodinâmica, que nada mais é do que o estudo da física sobre temperaturas. Venha conosco nessa aventura, é muito fácil e divertido. Vem comigo?',
    available: false,
    level: 1,
    type: 'solar'
  }
]

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
