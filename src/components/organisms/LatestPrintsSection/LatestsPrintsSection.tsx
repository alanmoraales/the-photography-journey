import { Fragment } from 'react'
import { Divider } from '@chakra-ui/react'
import { When } from 'react-if'
import Section from '@templates/Section'
import ArticleCard from '@molecules/ArticleCard'
import routes from '@constants/routes'
import prints from 'data/prints'
import { EArticleType } from '@declarations/article'

const LatestPrintsSection = () => (
  <Section title="My printed photos">
    {prints.slice(0, 6).map((article, index) => (
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
  </Section>
)

export default LatestPrintsSection
