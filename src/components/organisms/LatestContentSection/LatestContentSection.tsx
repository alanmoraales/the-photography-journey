import { Fragment } from 'react'
import { Divider } from '@chakra-ui/react'
import Section from 'components/templates/Section'
import ArticleCard from 'components/molecules/ArticleCard'
import articles from 'data/articles'

const LatestContentSection = () => (
  <Section title="Latest content">
    {articles.map((article) => (
      <Fragment key={article.slug}>
        <ArticleCard {...article} />
        <Divider />
      </Fragment>
    ))}
  </Section>
)

export default LatestContentSection
