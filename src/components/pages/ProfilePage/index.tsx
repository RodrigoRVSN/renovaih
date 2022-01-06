import { Ranking } from '@App/components/widgets/Ranking'
import { UserProfile } from '@App/components/widgets/UserProfile'
import { IUserInfo } from '@App/core/types/next-auth'

type IProfilePage = { user: IUserInfo }

export default function ProfilePage({ user }: IProfilePage): JSX.Element {
  return (
    <>
      <UserProfile user={user} />
      <Ranking />
    </>
  )
}
