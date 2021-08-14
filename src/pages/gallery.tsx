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
      <Head />
      <PageTemplate>
        <JustifiedGallery images={images} />
      </PageTemplate>
    </>
  )
}

export default Home
