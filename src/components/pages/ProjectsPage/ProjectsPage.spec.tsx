import { render, screen } from '@testing-library/react'
import '@App/tests/utils/intersectionObserver'
import { renderHook } from '@testing-library/react-hooks'

import AxiosMock from 'axios-mock-adapter'
import { apiAxios, baseURL } from '@App/core/services/api'
import { useFetchAllProjects } from '@App/core/services/fetchProjects'
import { projectsMock } from '@App/tests/__mocks__/projectsMock'
import { createWrapperQuery } from '@App/tests/utils/createWrapperQuery'
import { useSession } from 'next-auth/react'
import { usersMock } from '@App/tests/__mocks__/usersMock'
import ProjectsPage from '.'

const apiMock = new AxiosMock(apiAxios)

jest.useRealTimers()
jest.mock('next-auth/react')

const setup = async () => {
  const useSessionMocked = jest.mocked(useSession)
  useSessionMocked.mockReturnValue({
    data: {
      user: {
        ...usersMock[0]
      },
      expires: '1000'
    },
    status: 'authenticated'
  })

  const { result, waitFor } = renderHook(() => useFetchAllProjects(), {
    wrapper: createWrapperQuery()
  })

  const view = render(<ProjectsPage />, {
    wrapper: createWrapperQuery()
  })

  return { result, waitFor, ...view }
}

describe('<ProjectsPage />', () => {
  beforeEach(() => {
    apiMock.reset()
  })

  it('Should render Loading Spinner', async () => {
    apiMock.onGet(`${baseURL}/projects`).reply(200, projectsMock)
    await setup()

    expect(screen.getByTestId('loading_spinner')).toBeInTheDocument()
  })

  it('Should render Error Generic Message', async () => {
    apiMock.onGet(`${baseURL}/projects`).networkErrorOnce()
    const { waitFor, result } = await setup()

    await waitFor(() => result.current.isError, { timeout: 10000 })

    expect(
      screen.getByText(
        /Houve um erro ao carregar os projetos, tente novamente!/i
      )
    ).toBeInTheDocument()
  }, 12000)

  it('Should render Projects in success request', async () => {
    apiMock.onGet(`${baseURL}/projects`).reply(200, projectsMock)
    const { waitFor, result } = await setup()

    await waitFor(() => result.current.isSuccess)
    expect(screen.getByText(/energia solar/i)).toBeInTheDocument()
    expect(screen.getByText(/protetor solar/i)).toBeInTheDocument()
  })
})
