import { IRanking } from '../types/IRanking'
import { IUserInfo } from '../types/next-auth'
import api from './api'

async function fetchAllUsers(): Promise<IUserInfo[]> {
  const response = (await api.get('/users')) as unknown as IRanking
  return response.data[0].User
}

export { fetchAllUsers }
