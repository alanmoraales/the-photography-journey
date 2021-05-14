import NextHead from 'next/head'

const defaultTitle = 'The Photography Journey'

interface HeadProps {
  title?: string
}

const Head = ({ title = defaultTitle }: HeadProps) => (
  <NextHead>
    <title>{title}</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" key="gfonts" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap"
      rel="stylesheet"
      key="gfonts-slab-medium"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600&display=swap"
      rel="stylesheet"
      key="gfonts-nunito-light-normal-semibold"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
      key="responsive-tag"
    />
  </NextHead>
)

export default Head
