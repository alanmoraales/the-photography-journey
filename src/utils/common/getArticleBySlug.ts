import articles from 'data/articles'

const getArticleBySlug = (slug: string) =>
  articles.find((article) => article.slug === slug)

export default getArticleBySlug
