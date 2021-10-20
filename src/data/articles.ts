import { IArticle, EArticleType } from '@declarations/article'

const articles: IArticle[] = [
  {
    title: 'Infinity',
    coverUrl: 'https://i.ibb.co/56GLc9n/IMG-20200704-195213-1.jpg',
    type: EArticleType.Post,
    description:
      'People is divided in two pieces, the infinite and the finite. In this article I introduce the philosophy of balancing the infinite and how it can help you have a better life.',
    slug: '/posts/infinity',
    date: 'October 16, 2021',
    photosCount: 1,
    coverWidth: 1222,
    coverHeight: 687,
    keywords:
      'balance, infinite, finite, alanmoraales, philosophy, balance the infinite',
    socialMediaCoverUrl: 'https://i.ibb.co/25Bz9c5/infinity-banner.jpg',
  },
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
    keywords:
      'The Two Halves Of Life, creative, journey, alanmoraales, philosophy',
    socialMediaCoverUrl:
      'https://i.ibb.co/0nHvPr7/Posts-Starting-The-Journey.jpg',
  },
]

export default articles
