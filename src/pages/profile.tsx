import SEO from '@App/components/elements/SEO'
import ProfilePage from '@App/components/pages/ProfilePage'
import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'

type IProfile = { data: Session }

export default function Profile({ data }: IProfile): JSX.Element {
  if (!data.user) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <SEO
        title='Início | Renovaíh'
        description='No Renovaih você aprender sobre ambientes se divertindo'
      />
      <ProfilePage user={data.user} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = await getSession(ctx)

  return {
    props: { user }
  }
}
