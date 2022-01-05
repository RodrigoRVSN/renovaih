import { IRanking } from '../types/IRanking'
import { IUserInfo } from '../types/next-auth'
import api from './api'

async function fetchAllUsers(): Promise<IUserInfo[]> {
  try {
    const response = (await api.get('/users')) as unknown as IRanking
    return response.data[0].User
  } catch (err) {
    throw Error(String(err))
  }
}

export { fetchAllUsers }
