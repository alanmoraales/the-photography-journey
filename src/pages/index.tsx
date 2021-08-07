import styled from '@emotion/styled'
import { Grid } from '@chakra-ui/react'
import Head from 'components/atoms/Head'
import { Heading } from 'components/atoms/Typography'
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
      <Grid as="main" p={6} pt={16} placeItems="center">
        <Grid
          w="100%"
          maxWidth="1000px"
          templateColumns={{ base: 'auto', lg: '65% auto' }}
          gap={16}
        >
          <Grid gap={16}>
            <LatestContentSection />
            <GalleryPreviewSection />
            <Grid placeItems="center">
              <Heading variant="h6">The Photography Journey</Heading>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
