import { ReactNode } from 'react'
import { render, screen } from '@testing-library/react'
import '@App/tests/utils/intersectionObserver'
import { usersMock, usersMockApi } from '@App/tests/__mocks__/usersMock'
import { QueryClient, QueryClientProvider } from 'react-query'
import { renderHook } from '@testing-library/react-hooks'
import { useFetchRanking } from '@App/core/services/fetchUsers'

import AxiosMock from 'axios-mock-adapter'
import { apiAxios, baseURL } from '@App/core/services/api'

import ProfilePage from '.'

const apiMock = new AxiosMock(apiAxios)

interface IWrapper {
  children: ReactNode
}

jest.useRealTimers()

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  })

  return ({ children }: IWrapper) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

const setup = async () => {
  const { result, waitFor } = renderHook(() => useFetchRanking(), {
    wrapper: createWrapper()
  })

  const view = render(<ProfilePage user={usersMock[0]} />, {
    wrapper: createWrapper()
  })

  return { result, waitFor, ...view }
}

describe('<ProfilePage />', () => {
  beforeEach(() => {
    apiMock.reset()
  })

  it('Should render User Profile correctly + ranking in success request', async () => {
    apiMock.onGet(`${baseURL}/users`).reply(200, usersMockApi)

    const { waitFor, result } = await setup()

    await waitFor(() => result.current.isSuccess)

    expect(screen.getAllByText(/Rodrigo Victor/i)[0]).toBeInTheDocument()
    expect(screen.getByText(/rodrigovictor81@gmail.com/i)).toBeInTheDocument()

    expect(screen.getAllByText(/Rodrigo Victor/i)[1]).toBeInTheDocument()
    expect(screen.getByText(/Pereira Lopes/i)).toBeInTheDocument()
  })
})
