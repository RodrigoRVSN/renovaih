import { ButtonPoints } from '@App/components/elements/ButtonPoints'
import { IUserInfo } from '@App/core/types/next-auth'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

type IProfilePage = { user: IUserInfo }

export function UserProfile({ user }: IProfilePage): JSX.Element {
  const router = useRouter()

  async function handleLogout(): Promise<void> {
    await signOut()
    router.replace('/')
  }

  return (
    <section className='flex flex-col gap-xmd justify-center items-center relative max-w-fit mx-auto mb-xlg mt-xxlg'>
      <ButtonPoints
        points={user.points}
        className='absolute top-xxs right-xxs z-50'
      />
      <Image
        src={String(user.image)}
        width={128}
        height={128}
        layout='fixed'
        className='rounded-full'
      />
      <article className='flex-col-row text-center items-center gap-md'>
        <span className='text-primary'>1º</span>

        <div className='flex flex-col text-center'>
          <h1 className='font-bold text-3xl'>{user.name}</h1>
          <h2>{user.email}</h2>
        </div>

        <button
          type='button'
          className='transite hover:opacity-30'
          onClick={() => handleLogout()}
        >
          <img src='/icons/logout_icon.svg' alt='Ícone de sair' />
        </button>
      </article>
    </section>
  )
}
