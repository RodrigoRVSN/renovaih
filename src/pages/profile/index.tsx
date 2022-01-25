import SEO from '@App/components/elements/SEO'
import ProfilePage from '@App/components/pages/ProfilePage'
import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'

type IProfile = { data: Session }

export default function Profile({ data }: IProfile): JSX.Element {
  return (
    <>
      <SEO
        title={`${String(data?.user?.name)} | Renovaíh`}
        description='No Renovaih você aprender sobre ambientes se divertindo'
      />

      <ProfilePage user={data.user!} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const data = await getSession({ req })

  if (!data?.user) {
    return {
      redirect: {
        destination: `/`,
        permanent: false
      }
    }
  }

  return {
    props: { data }
  }
}
