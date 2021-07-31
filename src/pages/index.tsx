import styled from '@emotion/styled'
import { Divider, Grid } from '@chakra-ui/react'
import Head from 'components/atoms/Head'
import Navbar from 'components/organisms/Navbar'
import { Heading } from 'components/atoms/Typography'
import ArticleCard from 'components/molecules/ArticleCard/ArticleCard'

const Section = styled.div`
  display: grid;
  gap: 32px;
  max-width: 1000px;
  width: 100%;
`

const Space = styled.div`
  height: 40px;
`

const Home = () => (
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
        <Section>
          <Heading variant="h6">Lastest content</Heading>
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
      </Grid>
    </Grid>
  </>
)

export default Home
