enum EArticleType {
  Post = 'Post',
  Collection = 'Collection',
}

type TArticleType = keyof typeof EArticleType

export { EArticleType }
export type { TArticleType }
