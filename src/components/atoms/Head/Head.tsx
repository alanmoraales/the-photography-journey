import NextHead from 'next/head'

const defaultTitle = 'The Photography Journey'

interface HeadProps {
  title?: string
}

const Head = ({ title = defaultTitle }: HeadProps) => (
  <NextHead>
    <title>{title}</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
      key="responsive-tag"
    />
  </NextHead>
)

export default Head
