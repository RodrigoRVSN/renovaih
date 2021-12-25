import { signIn, signOut, useSession } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'

export function ButtonSignIn(): JSX.Element {
  const { data: session } = useSession()

  return (
    <button
      className='bg-primary-200 font-semibold items-center justify-center gap-6 hover:brightness-110 rounded-lg px-6 py-3 w-56 min-w-fit hidden md:flex'
      type='button'
      onClick={session ? () => signOut() : () => signIn()}
    >
      <FcGoogle size={20} />
      {session?.user ? session.user.name : 'Entrar com Google'}
    </button>
  )
}
