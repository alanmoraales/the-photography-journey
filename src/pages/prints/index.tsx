import { Fragment } from 'react'
import { Grid, Divider } from '@chakra-ui/react'
import { When } from 'react-if'
import PageTemplate from '@templates/PageTemplate'
import ArticleCard from '@molecules/ArticleCard'
import Head from '@atoms/Head'
import prints from 'data/prints'
import seoMetadata from 'data/seoMetadata'
import { EArticleType } from '@declarations/article'

const Posts = () => (
  <>
    <Head
      title="Prints | The Photography Journey"
      seoMetadata={seoMetadata.prints}
    />
    <PageTemplate>
      <Grid
        w="100%"
        templateColumns={{ base: 'auto', lg: '65% auto' }}
        gap={16}
      >
        <Grid gap={8} pt={4}>
          {prints.map((article, index) => (
            <Fragment key={article.slug}>
              <ArticleCard
                {...article}
                date={article.price}
                type={EArticleType.Print}
              />
              <When condition={index + 1 !== prints.length}>
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
