import { useQuery } from 'react-query'
import { IRanking } from '../types/IRanking'
import { IUserInfo } from '../types/next-auth'
import { apiAxios, baseURL } from './api'

async function fetchAllUsers(): Promise<IUserInfo[]> {
  try {
    const response = (await apiAxios.get(
      `${baseURL}/users`
    )) as unknown as IRanking

    return response?.data[0]?.User
  } catch (err) {
    throw Error(String(err))
  }
}

const useFetchRanking = () => {
  const { data, isError, isLoading, refetch } = useQuery(
    ['ranking_users'],
    fetchAllUsers,
    {
      staleTime: 24 * 60 * 60 * 1000 // 1 day
    }
  )

  return { data, isError, isLoading, refetch }
}

export { fetchAllUsers, useFetchRanking }
