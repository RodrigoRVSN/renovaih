import Home from '@App/pages'
import { render } from '@testing-library/react'

jest.mock('next-auth/react', () => {
  return {
    useSession: () => [null, false]
  }
})

const posts = [
  {
    slug: '1',
    title: 'solar',
    summary: 'resumo elaborado',
    image: 'foto_do_zoro.png',
    content: 'conteúdo'
  }
]

describe('Home page', () => {
  it('should renders correctly', () => {
    render(<Home posts={posts} />)
  })
})
