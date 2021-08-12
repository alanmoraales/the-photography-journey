import { Fragment } from 'react'
import { Divider } from '@chakra-ui/react'
import { When } from 'react-if'
import Section from '@templates/Section'
import ArticleCard from '@molecules/ArticleCard'
import articles from 'data/articles'

const LatestContentSection = () => (
  <Section title="Latest content">
    {articles.map((article, index) => (
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
