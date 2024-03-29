import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { apiAxios, baseURL } from '@App/core/services/api';
import { ErrorGeneric } from '../ErrorGeneric';
import { LoaderSpinner } from '../LoaderSpinner';

export function ButtonFinishProject() {
  const router = useRouter();
  const { data } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function handleFinishProject() {
    if (data?.user) {
      try {
        setIsLoading(true);
        await apiAxios.put(`${baseURL}/users/edit/${data.user?.id}`, {
          points: data.user.points + 1,
        });
      } catch {
        setIsError(true);
      } finally {
        await router.replace('/');
        setIsLoading(false);
      }
    }
  }

  if (isError) {
    return (
      <ErrorGeneric title="Houve um erro ao confirmar a conclusão do projeto!" />
    );
  }

  return (
    <button
      className="self-center mb-xxlg mt-xxlg bg-primary text-text_contrast py-md px-lg rounded-full transite hover:opacity-40"
      onClick={handleFinishProject}
      type="button"
      disabled={isLoading}
    >
      {isLoading ? <LoaderSpinner loading={isLoading} /> : 'Voltar'}
    </button>
  );
}
