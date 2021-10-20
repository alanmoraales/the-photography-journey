import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getPlaiceholder } from 'plaiceholder'
import PageTemplate from '@templates/PageTemplate'
import JustifiedGallery from '@organisms/JustifiedGallery'
import Head from '@atoms/Head'
import images from 'data/galleryImages'
import seoMetadata from 'data/seoMetadata'

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
      <Head
        title="Gallery | The Photography Journey"
        seoMetadata={seoMetadata.gallery}
      />
      <PageTemplate>
        <JustifiedGallery images={images} />
      </PageTemplate>
    </>
  )
}

export default Home
