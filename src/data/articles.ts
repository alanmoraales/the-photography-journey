import { IArticle, EArticleType } from '@declarations/article'

const articles: IArticle[] = [
  {
    title: 'Starting The Journey',
    coverUrl: 'https://i.ibb.co/mTX0w0T/IMG-20201026-172930-1920.jpg',
    type: EArticleType.Post,
    description:
      'Life, like a day, has a morning and an evening. In this article I want to introduce you The Two Halves Of Life and how this applies to the creative journey.',
    slug: '/posts/starting-the-journey',
    date: 'August 21, 2021',
    photosCount: 1,
    coverWidth: 1920,
    coverHeight: 1352,
  },
]

export default articles
