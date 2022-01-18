import { PostPageProps } from '@App/core/types/IPosts'

export function PostPage({ post }: PostPageProps): JSX.Element {
  return (
    <section className='p-xs sm:p-lg flex flex-col items-center'>
      <h1 className='my-xxlg text-4xl sm:text-5xl md:text-6xl text-transparent bg-gradient-to-r bg-clip-text from-primary to-secondary font-bold'>
        {post.title}
      </h1>
      <div
        className='leading-10 text-lg text-text'
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </section>
  )
}
