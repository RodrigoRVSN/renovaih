import { CardsContainer } from '@App/components/widgets/Home/CardsContainer'

export default function HomePage(): JSX.Element {
  return (
    <>
      <video autoPlay loop muted>
        <source src='/video/kids_playing.mp4' />
        <track src='/video/kids_playing.mp4' kind='captions' />
      </video>

      <CardsContainer />
    </>
  )
}
