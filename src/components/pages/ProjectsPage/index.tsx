import { CardProject } from '@App/components/elements/CardProject'
import { ErrorGeneric } from '@App/components/elements/ErrorGeneric'
import { LoaderSpinner } from '@App/components/elements/LoaderSpinner'
import { fetchAllProjects } from '@App/core/services/fetchProjects'
import { useSession } from 'next-auth/react'
import { useQuery } from 'react-query'

export default function ProjectsPage(): JSX.Element {
  const user = useSession()
  const { data, isError, isLoading, refetch } = useQuery(
    ['projects'],
    fetchAllProjects,
    {
      staleTime: 24 * 60 * 60 * 1000 // 1 day
    }
  )

  if (isLoading) {
    return <LoaderSpinner loading={isLoading} className='mt-xxxlg' />
  }

  if (isError || !data) {
    return (
      <ErrorGeneric
        refetch={refetch}
        title='Houve um erro ao carregar os projetos, tente novamente!'
      />
    )
  }

  return (
    <section className='my-xxlg grid-projects'>
      {data.map((project, project_index) => (
        <CardProject
          key={project.id}
          project_index={String(project_index)}
          project={project}
          points={String(user.data?.user?.points)}
        />
      ))}
    </section>
  )
}
