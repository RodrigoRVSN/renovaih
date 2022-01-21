import { apiAxios, baseURL } from '@App/core/services/api'
import { fetchAllUsers, useFetchRanking } from '@App/core/services/fetchUsers'
import { render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import axios from 'axios'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Ranking } from '.'

interface IWrapper {
  children: ReactNode
}

jest.mock('axios', () => ({
  ...jest.requireActual('axios'),
  get: jest.fn()
}))

const axiosMock = apiAxios as jest.Mocked<typeof axios>
let queryClient: QueryClient

const setup = () => {
  queryClient = new QueryClient()
  const view = render(
    <QueryClientProvider client={queryClient}>
      <Ranking />
    </QueryClientProvider>
  )

  return { queryClient, ...view }
}

const createWrapper = () => {
  return ({ children }: IWrapper) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

describe('<UserProfile />', () => {
  beforeEach(() => {
    queryClient = new QueryClient()
    jest.useRealTimers()
  })

  it('Should render loading state', () => {
    setup()
    expect(screen.getByTestId('loading_spinner')).toBeInTheDocument()
  })

  it('Should show error message', async () => {
    setup()
    const message = 'Network Error'
    axiosMock.get.mockRejectedValueOnce(Error(message))

    try {
      await fetchAllUsers()
    } catch (err) {
      expect((err as Error).message).toBe('Error: Network Error')
    }

    const { result, waitFor } = renderHook(() => useFetchRanking(), {
      wrapper: createWrapper()
    })

    await waitFor(() => result.current.isError, { timeout: 10000 })

    expect(axios.get).toHaveBeenCalledWith(`${baseURL}/users`)
    expect(axios.get).toHaveBeenCalledWith(`${baseURL}/users`)

    expect(
      screen.getByText(/Houve um erro ao carregar o ranking, tente novamente!/i)
    ).toBeInTheDocument()
  }, 12000)
})
