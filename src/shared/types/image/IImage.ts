import { ICssImagePlaceholder } from './ICssImagePlaceholder'

interface IImage {
  src: string
  width: number
  height: number
  base64Placeholder?: string
  css?: ICssImagePlaceholder
}

export type { IImage }
