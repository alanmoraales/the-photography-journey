import { Fragment } from 'react'
import { Grid, Divider } from '@chakra-ui/react'
import { When } from 'react-if'
import PageTemplate from '@templates/PageTemplate'
import ArticleCard from '@molecules/ArticleCard'
import Head from '@atoms/Head'
import articles from 'data/articles'

const Posts = () => (
  <>
    <Head />
    <PageTemplate>
      <Grid
        w="100%"
        templateColumns={{ base: 'auto', lg: '65% auto' }}
        gap={16}
      >
        <Grid gap={16}>
          {articles.map((article, index) => (
            <Fragment key={article.slug}>
              <ArticleCard {...article} />
              <When condition={index + 1 !== articles.length}>
                <Divider />
              </When>
            </Fragment>
          ))}
        </Grid>
      </Grid>
    </PageTemplate>
  </>
)

export default Posts
