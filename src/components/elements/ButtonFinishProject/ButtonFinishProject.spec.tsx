/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react'
import '@App/tests/utils/intersectionObserver'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { usersMock } from '@App/tests/__mocks__/usersMock'
import { ButtonFinishProject } from '.'

jest.mock('next/router')
jest.mock('next-auth/react')
jest.mock('axios')
const axiosMock = axios as jest.Mocked<typeof axios>

describe('<ButtonFinishProject />', () => {
  it('Should start a project available and redirect to page', async () => {
    const useRouterMocked = jest.mocked(useRouter)
    const useSessionMocked = jest.mocked(useSession)
    const pushMock = jest.fn()

    useRouterMocked.mockReturnValueOnce({
      replace: pushMock
    } as any)

    useSessionMocked.mockReturnValue({
      data: {
        user: {
          ...usersMock[0]
        },
        expires: '1000'
      },
      status: 'authenticated'
    })

    axiosMock.put.mockResolvedValueOnce({ data: { points: 3 } })
    const response = await axios.put('/users/edit/1', {
      points: 3
    })

    render(<ButtonFinishProject />)

    fireEvent.click(screen.getByText(/Voltar/i))

    await waitFor(() => {
      expect(axiosMock.put).toHaveBeenCalledWith('/users/edit/1', { points: 3 })
    })

    expect(response).toStrictEqual({
      data: {
        points: 3
      }
    })
    expect(pushMock).toBeCalledWith('/')
  })
})
