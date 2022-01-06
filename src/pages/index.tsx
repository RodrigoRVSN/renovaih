import SEO from '@App/components/elements/SEO'
import HomePage from '@App/components/pages/HomePage'

export default function Home(): JSX.Element {
  return (
    <>
      <SEO
        title='Início | Renovaíh'
        description='No Renovaih você aprender sobre ambientes se divertindo'
      />

      <HomePage />
    </>
  )
}
