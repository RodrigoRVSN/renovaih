import { baseURL } from '@App/core/services/api'
import { fetchAllUsers } from '@App/core/services/fetchUsers'
import { usersMock } from '@App/tests/__mocks__/usersMock'
import { render, screen } from '@testing-library/react'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Ranking } from '.'

jest.mock('axios')
const axiosMock = axios as jest.Mocked<typeof axios>

const setup = () => {
  const client = new QueryClient()

  const view = render(
    <QueryClientProvider client={client}>
      <Ranking />
    </QueryClientProvider>
  )

  return { ...view }
}

describe('<UserProfile />', () => {
  it('Should render loading state', () => {
    setup()
    expect(screen.getByTestId('loading_spinner')).toBeInTheDocument()
  })

  it('Should render loading state', async () => {
    const message = 'Network Error'
    axiosMock.get.mockRejectedValueOnce(Error(message))

    try {
      await fetchAllUsers()
    } catch (err) {
      expect((err as Error).message).toBe('Error: Network Error')
    }
    expect(axios.get).toHaveBeenCalledWith(`${baseURL}/users`)
    expect(axios.get).toHaveBeenCalledWith(`${baseURL}/users`)
  })
})
