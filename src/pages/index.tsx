import { useState } from 'react'
import styled from '@emotion/styled'
import { Grid, Box } from '@chakra-ui/react'
import Head from 'components/atoms/Head'
import Navbar from 'components/organisms/Navbar'
import { Heading } from 'components/atoms/Typography'
import useJustifiedLayout from 'use-justified-layout'
import ContainerWithSizes, { ISizes } from 'components/atoms/ContainerWithSizes'
import images from 'data/galleryImages'
import Portview from 'components/atoms/Portview'
import LatestContentSection from 'components/organisms/LatestContentSection'

const Section = styled.div`
  display: grid;
  gap: 32px;
  max-width: 1000px;
  width: 100%;
`

const Space = styled.div`
  height: 40px;
`

const Home = () => {
  const [galleryContainerWidth, setGalleryContainerWidth] = useState(0)
  const [layout] = useJustifiedLayout({
    layoutInput: images,
    configuration: {
      containerPadding: 0,
      containerWidth: galleryContainerWidth,
    },
    dependencies: [galleryContainerWidth],
  })
  const { boxes, containerHeight } = layout

  const onSizesChange = (sizes: ISizes) => {
    setGalleryContainerWidth(sizes.width)
  }

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
            <Section>
              <Heading variant="h6">Gallery</Heading>
              <Box width="100%" height={containerHeight}>
                <ContainerWithSizes onSizeChange={onSizesChange}>
                  {boxes.map((box, index) => (
                    <Portview
                      key={`${images[index].url}-${index}`}
                      imageURL={images[index].url}
                      left={box.left}
                      width={box.width}
                      height={box.height}
                      top={box.top}
                    />
                  ))}
                </ContainerWithSizes>
              </Box>
            </Section>
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
