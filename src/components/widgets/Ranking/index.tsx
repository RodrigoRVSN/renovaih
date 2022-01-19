import { useQuery } from 'react-query'
import { fetchAllUsers } from '@App/core/services/fetchUsers'
import { CardRankingUser } from '@App/components/elements/CardRankingUser'
import { LoaderSpinner } from '@App/components/elements/LoaderSpinner'
import { ErrorGeneric } from '@App/components/elements/ErrorGeneric'

export function Ranking(): JSX.Element {
  const { data, isError, isLoading, refetch } = useQuery(
    ['ranking_users'],
    fetchAllUsers,
    {
      staleTime: 24 * 60 * 60 * 1000 // 1 day
    }
  )

  if (isLoading) {
    return <LoaderSpinner loading={isLoading} />
  }

  if (isError) {
    return (
      <ErrorGeneric
        refetch={refetch}
        title='Houve um erro ao carregar o ranking, tente novamente!'
      />
    )
  }

  return (
    <section className='flex flex-col gap-xmd mx-auto md:w-ranking_w'>
      {data?.map((user, index) => (
        <CardRankingUser key={user.id} index={index + 1} user={user} />
      ))}
    </section>
  )
}
