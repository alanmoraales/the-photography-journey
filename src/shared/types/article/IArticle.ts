import { TArticleType } from './EArticleType'

interface IArticle {
  title: string
  slug: string
  description: string
  type: TArticleType
  coverUrl: string
  socialMediaCoverUrl: string
  photosCount: number
  date: string
  coverWidth: number
  coverHeight: number
  keywords: string
}

export type { IArticle }
