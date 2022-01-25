import { useFetchRanking } from '@App/core/services/fetchUsers'
import Profile, { getServerSideProps } from '@App/pages/profile'
import { render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { Session } from 'next-auth'
import AxiosMock from 'axios-mock-adapter'
import { apiAxios, baseURL } from '@App/core/services/api'
import { getSession } from 'next-auth/react'
import { createWrapperQuery } from '../utils/createWrapperQuery'
import { usersMock, usersMockApi } from '../__mocks__/usersMock'

jest.mock(`next/router`)
jest.mock(`next-auth/react`)
const apiMock = new AxiosMock(apiAxios)

const user: Session = {
  expires: `10000`,
  user: { ...usersMock[0] }
}

const setup = async () => {
  apiMock.onGet(`${baseURL}/users`).reply(200, usersMockApi)

  const { result, waitFor } = renderHook(() => useFetchRanking(), {
    wrapper: createWrapperQuery()
  })

  const view = render(<Profile data={user} />, {
    wrapper: createWrapperQuery()
  })

  await waitFor(() => result.current.isSuccess)

  return { result, waitFor, ...view }
}

describe('Profile Page', () => {
  it('Should render Profile Page correctly', async () => {
    await setup()

    expect(screen.getAllByText(/Rodrigo Victor/i)[0]).toBeInTheDocument()
    expect(screen.getByText(/rodrigovictor81@gmail.com/i)).toBeInTheDocument()

    expect(screen.getAllByText(/Rodrigo Victor/i)[1]).toBeInTheDocument()
    expect(screen.getByText(/Pereira Lopes/i)).toBeInTheDocument()
  })

  it('Should redirect if user is not logged', async () => {
    const getSessionMocked = jest.mocked(getSession)
    getSessionMocked.mockResolvedValueOnce(null)

    const response = await getServerSideProps({} as any)

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: `/`
        })
      })
    )
  })

  it('Should render content with user logged', async () => {
    const getSessionMocked = jest.mocked(getSession)

    getSessionMocked.mockResolvedValueOnce({
      user: {
        name: `rodrigo`
      }
    } as any)

    const response = await getServerSideProps({} as any)

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          data: {
            user: {
              name: `rodrigo`
            }
          }
        }
      })
    )
  })
})
