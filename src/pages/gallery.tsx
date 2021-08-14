import { GetStaticProps, InferGetStaticPropsType } from 'next'
import styled from '@emotion/styled'
import { Grid } from '@chakra-ui/react'
import { getPlaiceholder } from 'plaiceholder'
import Navbar from '@organisms/Navbar'
import JustifiedGallery from '@organisms/JustifiedGallery'
import Head from '@atoms/Head'
import images from 'data/galleryImages'

const Space = styled.div`
  height: 32px;
`

export const getStaticProps: GetStaticProps = async () => {
  const imagesWithPlaceholder = await Promise.all(
    images.map(async (image) => {
      const { base64 } = await getPlaiceholder(image.smallJpg)
      return {
        ...image,
        placeholder: base64,
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
          <JustifiedGallery images={images} />
        </Grid>
      </Grid>
      <Space />
    </>
  )
}

export default Home
