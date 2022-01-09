import Home from '@App/pages'
import { render, screen } from '@testing-library/react'

jest.mock('next-auth/react', () => {
  return {
    useSession: () => [null, false]
  }
})

const posts = [
  {
    slug: '1',
    title: 'Energia Solar',
    summary: 'Resumo elaborado sobre o post',
    image: 'foto_do_zoro.png',
    content: 'Conteúdo do site bem completo e conteudista'
  }
]

describe('Home page', () => {
  it('should renders correctly', () => {
    render(<Home posts={posts} />)

    expect(screen.getByText(/energia solar/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Resumo elaborado sobre o post/i)
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /bora trabalhar/i })
    ).toBeInTheDocument()
  })
})
