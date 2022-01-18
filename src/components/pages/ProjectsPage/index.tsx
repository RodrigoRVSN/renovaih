import { CardProject } from '@App/components/elements/CardProject'
import { LoaderSpinner } from '@App/components/elements/LoaderSpinner'
import { fetchAllProjects } from '@App/core/services/fetchProjects'
import { useQuery } from 'react-query'

export default function ProjectsPage(): JSX.Element {
  const { data, isLoading } = useQuery(['projects'], fetchAllProjects, {
    staleTime: 5 * 60 * 1000 // 5 min
  })

  if (isLoading || !data) {
    return <LoaderSpinner loading={isLoading} />
  }

  return (
    <section className='my-xxlg grid-projects'>
      {data.map((project) => (
        <CardProject key={project.id} project={project} />
      ))}
    </section>
  )
}
