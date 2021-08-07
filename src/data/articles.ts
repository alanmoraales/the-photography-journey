import { IArticle, EArticleType } from 'shared/types/article'

const articles: IArticle[] = [
  {
    title: 'Starting The Journey',
    coverUrl:
      'https://images.unsplash.com/photo-1606971349543-944d83348665?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
    type: EArticleType.Post,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo malesuada aliquet tortor. Ac non quis porta duis.',
    slug: '/posts/starting-the-journey',
    date: 'June 25, 2021',
    photosCount: 1,
  },
  {
    title: 'Finding Good Stories In The City',
    coverUrl:
      'https://images.unsplash.com/photo-1606971349543-944d83348665?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
    type: EArticleType.Post,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo malesuada aliquet tortor. Ac non quis porta duis.',
    slug: '/posts/starting-the-journey-1',
    date: 'June 25, 2021',
    photosCount: 1,
  },
]

export default articles
