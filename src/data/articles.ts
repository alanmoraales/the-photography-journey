import { IArticle, EArticleType } from '@declarations/article'

const articles: IArticle[] = [
  {
    title: 'Starting The Journey',
    coverUrl: 'https://i.ibb.co/hCPt8fM/IMG-20201026-172930-1920.webp',
    type: EArticleType.Post,
    description:
      'Life, like a day, has a morning and an evening. In this article I want to introduce you The Two Halves Of Life and how this applies to the creative journey.',
    slug: '/posts/starting-the-journey',
    date: 'August 8, 2021',
    photosCount: 1,
  },
]

export default articles
