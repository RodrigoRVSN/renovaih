import { render, screen, waitFor } from '@testing-library/react'
import '@App/tests/utils/intersectionObserver'
import { usersMock, usersMockApi } from '@App/tests/__mocks__/usersMock'

import AxiosMock from 'axios-mock-adapter'
import { apiAxios, baseURL } from '@App/core/services/api'

import { createWrapperQuery } from '@App/tests/utils/createWrapperQuery'
import ProfilePage from '.'

const apiMock = new AxiosMock(apiAxios)

jest.useRealTimers()

const setupComponent = () => {
  return render(<ProfilePage user={usersMock[0]} />, {
    wrapper: createWrapperQuery()
  })
}

describe('<ProfilePage />', () => {
  it('should render User Profile correctly + ranking in success request', async () => {
    apiMock.onGet(`${baseURL}/users`).reply(200, usersMockApi)

    setupComponent()

    await waitFor(() => {
      expect(screen.getAllByText(/Rodrigo Victor/i)[0]).toBeInTheDocument()
    })

    expect(screen.getByText(/rodrigovictor81@gmail.com/i)).toBeInTheDocument()

    expect(screen.getAllByText(/Rodrigo Victor/i)[1]).toBeInTheDocument()
    expect(screen.getByText(/Pereira Lopes/i)).toBeInTheDocument()
  })
})
