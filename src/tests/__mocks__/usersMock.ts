import { IUsersMockApi } from '@App/core/types/IUsersMockApi'
import { IUserInfo } from '@App/core/types/next-auth'

const usersMock: IUserInfo[] = [
  {
    id: '1',
    name: 'Rodrigo Victor',
    email: 'rodrigovictor81@gmail.com',
    points: 9000,
    rankingId: 1,
    image:
      'https://w7.pngwing.com/pngs/942/576/png-transparent-roronoa-zoro-one-piece-vegeta-character-one-piece-face-human-boy.png'
  },
  {
    id: '2',
    name: 'Pereira Lopes',
    email: 'pereira@gmail.com',
    points: 6000,
    rankingId: 1,
    image:
      'https://w7.pngwing.com/pngs/942/576/png-transparent-roronoa-zoro-one-piece-vegeta-character-one-piece-face-human-boy.png'
  }
]

const usersMockApi: IUsersMockApi[] = [
  {
    User: [...usersMock]
  }
]

export { usersMock, usersMockApi }
