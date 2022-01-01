import { IUserInfo } from '@App/core/types/next-auth'

type IProfilePage = { user: IUserInfo }

export default function ProfilePage({ user }: IProfilePage): JSX.Element {
  return (
    <>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </>
  )
}
