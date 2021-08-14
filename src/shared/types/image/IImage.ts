interface IImage {
  smallWebp: string
  smallJpg: string
  originalWebp?: string
  originalJpg?: string
  placeholder?: string
  width: number
  height: number
  css?: any
  img?: any
  top?: number
  left?: number
}

export type { IImage }
