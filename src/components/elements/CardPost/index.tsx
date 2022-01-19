import { Post } from '@App/core/types/IPosts'
import { useRouter } from 'next/router'

interface ICardPost {
  post: Post
}

export function CardPost({ post }: ICardPost): JSX.Element {
  const router = useRouter()

  return (
    <article className='bg-text_contrast flex flex-col items-center mx-auto mb-xxlg w-card_min_w sm:w-card_w text-center rounded-xl shadow-xl transite hover:scale-110'>
      <img className='w-card_image rounded-3xl' src={post.image} alt='Logo' />
      <div className='p-lg'>
        <h2 className='font-bold mb-lg text-xl'>{post.title}</h2>
        <p className='text-justify'>{post.summary}</p>
        <button
          type='button'
          onClick={() => router.push(`/posts/${post.slug}`)}
          className='bg-primary mt-xxlg text-text_contrast py-xs px-lg text-lg rounded-2xl transite hover:opacity-70 mb-auto'
        >
          Bora trabalhar!
        </button>
      </div>
    </article>
  )
}
