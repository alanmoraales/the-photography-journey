import { Divider } from '@chakra-ui/react'
import Section from 'components/templates/Section'
import ArticleCard from 'components/molecules/ArticleCard'
import articles from 'data/articles'

const LatestContentSection = () => (
  <Section title="Latest content">
    {articles.map((article) => (
      <>
        <ArticleCard {...article} />
        <Divider />
      </>
    ))}
  </Section>
)

export default LatestContentSection
