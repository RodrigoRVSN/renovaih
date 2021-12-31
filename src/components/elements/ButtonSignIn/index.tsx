import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/dist/client/router'

export function ButtonSignIn(): JSX.Element {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <button
      className='text-text_contrast hover:text-secondary font-bold text-xl'
      type='button'
      onClick={session ? () => router.push('/profile') : () => signIn()}
    >
      {session?.user ? 'Perfil' : 'Login'}
    </button>
  )
}
