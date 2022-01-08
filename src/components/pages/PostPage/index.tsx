import { PostPageProps } from '@App/core/types/IPosts'

export function PostPage({ post }: PostPageProps): JSX.Element {
  return (
    <section className='p-xs sm:p-lg flex flex-col items-center'>
      <h1 className='text-6xl mb-xxlg'>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </section>
  )
}
