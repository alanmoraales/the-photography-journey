import { GetStaticProps, InferGetStaticPropsType } from 'next'
import styled from '@emotion/styled'
import { Grid } from '@chakra-ui/react'
import { getPlaiceholder } from 'plaiceholder'
import Navbar from 'components/organisms/Navbar'
import LatestContentSection from 'components/organisms/LatestContentSection'
import GalleryPreviewSection from 'components/organisms/GalleryPreviewSection'
import Head from 'components/atoms/Head'
import images from 'data/galleryImages'

const Space = styled.div`
  height: 32px;
`

export const getStaticProps: GetStaticProps = async () => {
  const previewGalleryImages = await Promise.all(
    images.slice(0, 7).map(async (image) => {
      const { base64 } = await getPlaiceholder(image.smallJpg)
      return {
        ...image,
        placeholder: base64,
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
      <Space />
      <Navbar />
      <Grid p={6} pt={8} placeItems="center">
        <Grid
          as="main"
          gap={16}
          placeItems="center"
          maxWidth="container.lg"
          width="100%"
        >
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
        </Grid>
      </Grid>
      <Space />
    </>
  )
}

export default Home
