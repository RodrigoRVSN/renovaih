import { render, screen } from '@testing-library/react'
import '@App/tests/utils/intersectionObserver'
import { usersMock, usersMockApi } from '@App/tests/__mocks__/usersMock'
import { renderHook } from '@testing-library/react-hooks'
import { useFetchRanking } from '@App/core/services/fetchUsers'

import AxiosMock from 'axios-mock-adapter'
import { apiAxios, baseURL } from '@App/core/services/api'

import { createWrapperQuery } from '@App/tests/utils/createWrapperQuery'
import ProfilePage from '.'

const apiMock = new AxiosMock(apiAxios)

jest.useRealTimers()

const setup = async () => {
  const { result, waitFor } = renderHook(() => useFetchRanking(), {
    wrapper: createWrapperQuery()
  })

  const view = render(<ProfilePage user={usersMock[0]} />, {
    wrapper: createWrapperQuery()
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
