import { FC } from 'react'
import NextHead from 'next/head'
import { ISeoMetadata } from '@declarations/common'

const defaultTitle = 'The Photography Journey | alanmoraales'
const siteName = 'The Photography Journey'

interface HeadProps {
  title?: string
  seoMetadata: ISeoMetadata
}

const Head: FC<HeadProps> = ({
  title = defaultTitle,
  seoMetadata: { description, keywords, ogImageSrc, ogTitle, ogUrl },
  children,
}) => (
  <NextHead>
    <title>{title}</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
      key="responsive-tag"
    />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={ogTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImageSrc} />
    <meta property="og:url" content={ogUrl} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:site_name" content={siteName} />
    <meta name="twitter:image:alt" content={siteName} />
    {children}
  </NextHead>
)

export default Head
