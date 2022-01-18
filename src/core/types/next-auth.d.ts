import type { DefaultUser } from 'next-auth'

export interface IUserInfo extends DefaultUser {
  id: string
  points: number
  rankingId: number
}

declare module 'next-auth' {
  interface Session {
    user?: IUserInfo
  }

  interface User {
    points: number
    rankingId: number
  }
}
