import { FC } from 'react'
import NextHead from 'next/head'

const defaultTitle = 'The Photography Journey | alanmoraales'

interface HeadProps {
  title?: string
}

const Head: FC<HeadProps> = ({ title = defaultTitle, children }) => (
  <NextHead>
    <title>{title}</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
      key="responsive-tag"
    />
    {children}
  </NextHead>
)

export default Head
