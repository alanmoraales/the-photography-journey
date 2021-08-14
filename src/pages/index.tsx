import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Grid } from '@chakra-ui/react'
import { getPlaiceholder } from 'plaiceholder'
import PageTemplate from '@templates/PageTemplate'
import LatestContentSection from '@organisms/LatestContentSection'
import GalleryPreviewSection from '@organisms/GalleryPreviewSection'
import Head from '@atoms/Head'
import images from 'data/galleryImages'

export const getStaticProps: GetStaticProps = async () => {
  const previewGalleryImages = await Promise.all(
    images.slice(0, 7).map(async (image) => {
      const { css } = await getPlaiceholder(image.smallJpg)
      return {
        ...image,
        css,
      }
    })
  )

  return {
    props: {
      previewGalleryImages,
    },
  }
}

const Home = ({
  previewGalleryImages,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head />
      <PageTemplate>
        <Grid
          w="100%"
          templateColumns={{ base: 'auto', lg: '65% auto' }}
          gap={16}
        >
          <Grid gap={16}>
            <LatestContentSection />
          </Grid>
        </Grid>
        <GalleryPreviewSection images={previewGalleryImages} />
      </PageTemplate>
    </>
  )
}

export default Home
