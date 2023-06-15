interface IPrint {
  title: string
  slug: string
  description: string
  coverUrl: string
  socialMediaCoverUrl: string
  size: string
  coverWidth: number
  coverHeight: number
  keywords: string
  price: string
  carouselImages: { src: string; alt: string }[]
}

export type { IPrint }
