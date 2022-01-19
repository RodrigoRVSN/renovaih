import { Post } from '@App/core/types/IPosts'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

interface ICardPost {
  post: Post
}

export function CardPost({ post }: ICardPost): JSX.Element {
  const router = useRouter()

  return (
    <motion.article
      initial={{ opacity: 0, y: '-20vh' }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='card-post'
    >
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
    </motion.article>
  )
}
