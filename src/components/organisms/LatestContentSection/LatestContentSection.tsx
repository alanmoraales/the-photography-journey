import { Fragment } from 'react'
import { Divider } from '@chakra-ui/react'
import { When } from 'react-if'
import Section from '@templates/Section'
import ArticleCard from '@molecules/ArticleCard'
import routes from '@constants/routes'
import articles from 'data/articles'

const { posts } = routes

const LatestContentSection = () => (
  <Section title="My latest blog entries" seeAllUrl={posts}>
    {articles.slice(0, 6).map((article, index) => (
      <Fragment key={article.slug}>
        <ArticleCard {...article} />
        <When condition={index + 1 !== articles.length}>
          <Divider />
        </When>
      </Fragment>
    ))}
  </Section>
)

export default LatestContentSection
