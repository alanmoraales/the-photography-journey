import { IArticle, EArticleType } from 'shared/types/article'

const articles: IArticle[] = [
  {
    title: 'Starting The Journey',
    coverUrl: 'https://i.ibb.co/6wDFLKQ/IMG-20201026-172930-3x.webp',
    type: EArticleType.Post,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo malesuada aliquet tortor. Ac non quis porta duis.',
    slug: '/posts/starting-the-journey',
    date: 'August 8, 2021',
    photosCount: 1,
  },
]

export default articles
