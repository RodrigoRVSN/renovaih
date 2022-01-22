import { IFetchProjects, IProjects } from '../types/IProjects'
import { apiAxios, baseURL } from './api'

async function fetchAllProjects(): Promise<IProjects[]> {
  try {
    const response = (await apiAxios.get(
      `${baseURL}/projects`
    )) as unknown as IFetchProjects

    return response.data
  } catch (err) {
    throw Error(String(err))
  }
}

export { fetchAllProjects }
