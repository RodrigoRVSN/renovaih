import { apiAxios, baseURL } from '@App/core/services/api'
import { useFetchAllProjects } from '@App/core/services/fetchProjects'
import Projects from '@App/pages/projects'
import { createWrapperQuery } from '@App/tests/utils/createWrapperQuery'
import { usersMock } from '@App/tests/__mocks__/usersMock'
import { render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { useSession } from 'next-auth/react'
import AxiosMock from 'axios-mock-adapter'
import { projectsMock } from '@App/tests/__mocks__/projectsMock'

import '@App/tests/utils/intersectionObserver'

const apiMock = new AxiosMock(apiAxios)
jest.mock('next-auth/react')

describe('Projects Page', () => {
  it('Should render Projects Page with initial data', async () => {
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

    apiMock.onGet(`${baseURL}/projects`).reply(200, projectsMock)

    const { result, waitFor } = renderHook(() => useFetchAllProjects(), {
      wrapper: createWrapperQuery()
    })

    render(<Projects />, {
      wrapper: createWrapperQuery()
    })

    await waitFor(() => result.current.isSuccess)
    expect(screen.getByText(/energia solar/i)).toBeInTheDocument()
  })
})
