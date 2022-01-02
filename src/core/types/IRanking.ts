import { IUserInfo } from './next-auth'

export interface IRanking {
  data: {
    User: IUserInfo[]
  }[]
}
