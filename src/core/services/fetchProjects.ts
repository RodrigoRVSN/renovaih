import { useQuery } from 'react-query'
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

const useFetchAllProjects = () => {
  const { data, isError, isLoading, refetch, isSuccess } = useQuery(
    ['projects'],
    fetchAllProjects,
    {
      staleTime: 24 * 60 * 60 * 1000 // 1 day
    }
  )

  return { data, isError, isLoading, refetch, isSuccess }
}

export { fetchAllProjects, useFetchAllProjects }
