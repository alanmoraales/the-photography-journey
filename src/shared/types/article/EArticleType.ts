enum EArticleType {
  Post = 'Post',
  Collection = 'Collection',
  Print = 'Print',
}

type TArticleType = keyof typeof EArticleType

export { EArticleType }
export type { TArticleType }
