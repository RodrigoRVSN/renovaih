import { CardPost } from '@App/components/elements/CardPost'
import { Post } from '@App/core/types/IPosts'

interface IHomePage {
  posts: Post[]
}

export default function HomePage({ posts }: IHomePage): JSX.Element {
  return (
    <>
      <video autoPlay loop>
        <source src='/video/kids_playing.mp4' />
        <track src='/video/kids_playing.mp4' kind='captions' />
      </video>

      <section className='grid-cards my-xxxlg'>
        {posts?.map((post) => (
          <CardPost key={post.slug} post={post} />
        ))}
      </section>
    </>
  )
}
