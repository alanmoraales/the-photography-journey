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
      <Head>
        <meta
          name="description"
          content="The Photography Journey is alanmoraales photography blog. Here you'll find articles that will help you grow as a photographer, or as a creative person in general."
        />
        <meta
          name="keywords"
          content="photography, blog, alanmoraales, creative"
        />
        <meta
          property="og:title"
          content="The Photography Journey | alanmoraales"
        />
        <meta
          property="og:description"
          content="The Photography Journey is alanmoraales photography blog. Here you'll find articles that will help you grow as a photographer, or as a creative person in general."
        />
        <meta property="og:image" content="https://i.ibb.co/Pc9yD7W/Home.jpg" />
        <meta property="og:url" content="https://journey.alanmoraales.live/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="The Photography Journey" />
        <meta name="twitter:image:alt" content="The Photography Journey" />
      </Head>
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
