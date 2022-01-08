import { Post } from '@App/core/types/IPosts'
import { useRouter } from 'next/router'

interface ICardPost {
  post: Post
}

export function CardPost({ post }: ICardPost): JSX.Element {
  const router = useRouter()

  return (
    <article className='bg-text mx-auto h-card_h w-card_w flex flex-col items-center text-center'>
      <img className='w-card_image' src={post.image} alt='Logo' />
      <div className='p-lg rounded-b-3xl bg-blocked'>
        <h2 className='font-bold mb-lg text-xl'>{post.title}</h2>
        <p className='text-justify'>{post.summary}</p>
        <button
          type='button'
          onClick={() => router.push(`/posts/${post.slug}`)}
          className='bg-start_button text-text_contrast mt-md p-xs text-lg rounded-2xl transite hover:opacity-70'
        >
          Bora trabalhar
        </button>
      </div>
    </article>
  )
}
