export interface Post {
  slug: string
  title: string
  summary: string
  image: string
  content: string
}

export interface PostProps {
  posts: Post[]
}

export interface IPrismic {
  uid: string
  data: {
    title: {
      text: string
    }[]
    summary: {
      text: string
    }[]
    post_image: {
      url: string
    }
  }
}
