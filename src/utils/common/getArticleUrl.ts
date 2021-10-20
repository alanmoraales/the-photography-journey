import environment from '@constants/environment'

const { hostUrl } = environment

const getArticleUrl = (slug: string) => `${hostUrl}${slug}`

export { getArticleUrl }
