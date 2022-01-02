import { useQuery } from 'react-query'
import { fetchAllUsers } from '@App/core/services/fetchUsers'
import { CardRankingUser } from '@App/components/elements/CardRankingUser'
import { LoaderSpinner } from '@App/components/elements/LoaderSpinner'

export function Ranking(): JSX.Element {
  const { data, isLoading } = useQuery(['ranking_users'], fetchAllUsers, {
    staleTime: 60 * 60 * 1000
  })

  if (isLoading) {
    return <LoaderSpinner loading={isLoading} />
  }

  return (
    <section className='flex flex-col mt-xlg gap-xmd'>
      {data?.map((user, index) => (
        <CardRankingUser key={user.id} index={index + 1} user={user} />
      ))}
    </section>
  )
}
