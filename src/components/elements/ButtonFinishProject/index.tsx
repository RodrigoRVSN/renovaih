import api from '@App/core/services/api'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export function ButtonFinishProject(): JSX.Element {
  const router = useRouter()
  const { data } = useSession()

  async function handleFinishProject(): Promise<void> {
    if (data?.user) {
      try {
        await api.put(`/users/edit/${data.user?.id}`, {
          points: data.user.points + 1
        })
        router.replace('/')
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <button
      className='self-center mt-xxlg bg-primary py-md px-lg rounded-full transite hover:opacity-40'
      onClick={handleFinishProject}
      type='button'
    >
      Voltar
    </button>
  )
}
