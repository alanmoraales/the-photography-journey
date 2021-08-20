import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getPlaiceholder } from 'plaiceholder'
import PageTemplate from '@templates/PageTemplate'
import JustifiedGallery from '@organisms/JustifiedGallery'
import Head from '@atoms/Head'
import images from 'data/galleryImages'

export const getStaticProps: GetStaticProps = async () => {
  const imagesWithPlaceholder = await Promise.all(
    images.map(async (image) => {
      const { css } = await getPlaiceholder(image.smallJpg)
      return {
        ...image,
        css,
      }
    })
  )

  return {
    props: {
      images: imagesWithPlaceholder,
    },
  }
}

const Home = ({ images }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head title="Gallery | The Photography Journey">
        <meta
          name="description"
          content="A collection of the best alanmoraales street photography"
        />
        <meta
          name="keywords"
          content="photography, blog, alanmoraales, creative, gallery, street photography"
        />
        <meta property="og:title" content="Gallery | The Photography Journey" />
        <meta
          property="og:description"
          content="A collection of the best alanmoraales street photography"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/x1MsRjN/Gallery.jpg"
        />
        <meta
          property="og:url"
          content="https://journey.alanmoraales.live/gallery"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="The Photography Journey" />
        <meta name="twitter:image:alt" content="The Photography Journey" />
      </Head>
      <PageTemplate>
        <JustifiedGallery images={images} />
      </PageTemplate>
    </>
  )
}

export default Home
