import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap"
            as="font"
            key="preload-gfonts-slab-medium"
          />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600&display=swap"
            as="font"
            key="preload-gfonts-nunito-light-normal-semibold"
          />
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
