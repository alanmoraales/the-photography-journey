import { ICssImagePlaceholder } from './ICssImagePlaceholder'

interface IImage {
  smallWebp: string
  smallJpg: string
  originalWebp?: string
  originalJpg?: string
  width: number
  height: number
  css?: ICssImagePlaceholder
}

export type { IImage }
