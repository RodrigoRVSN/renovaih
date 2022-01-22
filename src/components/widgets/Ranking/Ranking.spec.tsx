import { useFetchRanking } from '@App/core/services/fetchUsers'
import { render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import AxiosMock from 'axios-mock-adapter'

import { apiAxios, baseURL } from '@App/core/services/api'
import { Ranking } from '.'

const apiMock = new AxiosMock(apiAxios)

interface IWrapper {
  children: ReactNode
}

let queryClient: QueryClient

const setup = () => {
  queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  })

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
    apiMock.reset()
    queryClient = new QueryClient()
    jest.useRealTimers()
  })

  it('Should render loading state', () => {
    setup()
    expect(screen.getByTestId('loading_spinner')).toBeInTheDocument()
  })

  it('Should show error message', async () => {
    setup()
    apiMock.onGet(`${baseURL}/users`).networkErrorOnce()

    const { result, waitFor } = renderHook(() => useFetchRanking(), {
      wrapper: createWrapper()
    })

    await waitFor(() => result.current.isError, { timeout: 10000 })

    expect(
      screen.getByText(/Houve um erro ao carregar o ranking, tente novamente!/i)
    ).toBeInTheDocument()
  }, 12000)
})
