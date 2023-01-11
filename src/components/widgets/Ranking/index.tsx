import { CardRankingUser } from '@App/components/elements/CardRankingUser';
import { ErrorGeneric } from '@App/components/elements/ErrorGeneric';
import { LoaderSpinner } from '@App/components/elements/LoaderSpinner';
import { useFetchRanking } from '@App/core/services/fetchUsers';

export function Ranking() {
  const { data, isError, isLoading, refetch } = useFetchRanking();

  if (isLoading) {
    return <LoaderSpinner loading={isLoading} />;
  }

  if (isError) {
    return (
      <ErrorGeneric
        refetch={refetch}
        title="Houve um erro ao carregar o ranking, tente novamente!"
      />
    );
  }

  return (
    <section className="flex flex-col gap-xmd mx-auto md:w-ranking_w">
      {data?.map((user, index) => (
        <CardRankingUser key={user.id} index={index + 1} user={user} />
      ))}
    </section>
  );
}
