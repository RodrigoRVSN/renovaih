import { IUserInfo } from '@App/core/types/next-auth'
import { Ranking } from '../widgets/Ranking'
import { UserProfile } from '../widgets/UserProfile'

type IProfilePage = { user: IUserInfo }

export default function ProfilePage({ user }: IProfilePage): JSX.Element {
  return (
    <>
      <UserProfile user={user} />
      <Ranking />
    </>
  )
}
