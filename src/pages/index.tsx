import { useState } from 'react'
import styled from '@emotion/styled'
import { Divider, Grid, Box } from '@chakra-ui/react'
import Head from 'components/atoms/Head'
import Navbar from 'components/organisms/Navbar'
import { Heading } from 'components/atoms/Typography'
import ArticleCard from 'components/molecules/ArticleCard/ArticleCard'
import useJustifiedLayout from 'use-justified-layout'
import ContainerWithSizes, { ISizes } from 'components/atoms/ContainerWithSizes'
import images from 'data/galleryImages'
import Portview from 'components/atoms/Portview'

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
            <Section>
              <Heading variant="h6">Latest content</Heading>
              <ArticleCard
                title="Finding Stories In The City"
                coverUrl="https://images.unsplash.com/photo-1606971349543-944d83348665?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo malesuada aliquet tortor. Ac non quis porta duis."
                articleSlug="/posts/starting-the-journey"
                date="June 25, 2021"
                photosCount={1}
                likesCount={12}
              />
              <Divider />
              <ArticleCard
                title="Finding Good Stories In The City"
                coverUrl="https://images.unsplash.com/photo-1611443849433-32b88cb1b91c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=305&q=80"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo malesuada aliquet tortor. Ac non quis porta duis."
                articleSlug="/posts/starting-the-journey"
                date="June 25, 2021"
                photosCount={1}
                likesCount={12}
              />
              <Divider />
            </Section>
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
