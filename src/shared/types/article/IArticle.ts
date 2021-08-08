import { TArticleType } from './EArticleType'

interface IArticle {
  title: string
  slug: string
  description: string
  type: TArticleType
  coverUrl: string
  photosCount: number
  date: string
}

export type { IArticle }