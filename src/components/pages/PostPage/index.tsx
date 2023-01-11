import { PostPageProps } from '@App/core/types/IPosts';
import styles from './styles.module.css';

export function PostPage({ post }: PostPageProps): JSX.Element {
  return (
    <section className={styles.postpage__container}>
      <h1 className={styles.postpage__container__title}>{post.title}</h1>
      <div
        className="leading-10 text-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </section>
  );
}
