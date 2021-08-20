import { Fragment } from 'react'
import { Grid, Divider } from '@chakra-ui/react'
import { When } from 'react-if'
import PageTemplate from '@templates/PageTemplate'
import ArticleCard from '@molecules/ArticleCard'
import Head from '@atoms/Head'
import articles from 'data/articles'

const Posts = () => (
  <>
    <Head title="Posts | The Photography Journey">
      <meta
        name="description"
        content="The complete list of posts in The Photography Journey"
      />
      <meta
        name="keywords"
        content="photography, blog, alanmoraales, creative, posts"
      />
      <meta property="og:title" content="Posts | The Photography Journey" />
      <meta
        property="og:description"
        content="The complete list of posts in The Photography Journey"
      />
      <meta property="og:image" content="https://i.ibb.co/L84XVcs/Posts.jpg" />
      <meta
        property="og:url"
        content="https://journey.alanmoraales.live/posts"
      />
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
