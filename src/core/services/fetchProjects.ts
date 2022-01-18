import { IFetchProjects, IProjects } from '../types/IProjects'
import api from './api'

async function fetchAllProjects(): Promise<IProjects[]> {
  try {
    const response = (await api.get('/projects')) as unknown as IFetchProjects
    return response.data
  } catch (err) {
    throw Error(String(err))
  }
}

export { fetchAllProjects }
