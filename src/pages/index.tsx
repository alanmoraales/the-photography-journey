import styled from '@emotion/styled'
import { Grid } from '@chakra-ui/react'
import Head from 'components/atoms/Head'
import Navbar from 'components/organisms/Navbar'
import LatestContentSection from 'components/organisms/LatestContentSection'
import GalleryPreviewSection from 'components/organisms/GalleryPreviewSection'

const Space = styled.div`
  height: 40px;
`

const Home = () => {
  return (
    <>
      <Head />
      <Space />
      <Navbar />
      <Grid p={6} placeItems="center">
        <Grid
          as="main"
          pt={16}
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
          <GalleryPreviewSection />
        </Grid>
      </Grid>
      <Space />
    </>
  )
}

export default Home
