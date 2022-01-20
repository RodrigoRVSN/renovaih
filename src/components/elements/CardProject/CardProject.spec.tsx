import { projectsMock } from '@App/tests/__mocks__/projectsMock'
import { render, screen } from '@testing-library/react'
import { CardProject } from '.'
import '@App/tests/utils/intersectionObserver'

describe('<CardProject />', () => {
  it('Should render Project Card blocked (done) correctly', async () => {
    render(
      <CardProject points='2' project={projectsMock[0]} project_index='1' />
    )

    expect(screen.getByText(/Energia solar/i)).toBeInTheDocument()
    expect(screen.getByTestId('blocked')).toBeInTheDocument()
  })

  it('Should render Project Card blocked (unavailable) correctly', async () => {
    render(
      <CardProject points='2' project={projectsMock[0]} project_index='3' />
    )

    expect(screen.getByText(/Energia solar/i)).toBeInTheDocument()
    expect(screen.getByTestId('blocked')).toBeInTheDocument()
  })

  it('Should render Project Card avaiable correctly', async () => {
    render(
      <CardProject points='2' project={projectsMock[0]} project_index='2' />
    )

    expect(screen.getByText(/Energia solar/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /começar/i })).toBeInTheDocument()
  })
})
