import { Grid, Image } from '@chakra-ui/react'
import GoToButton from '@atoms/buttons/GoToButton'
import Heading from '@atoms/typography/Heading'
import Body from '@atoms/typography/Body'
import { ArticleCardRow } from '@atoms/ArticleCard'
import { EArticleType, TArticleType } from '@declarations/article'
import { Else, If, Then } from 'react-if'

const buttonsLabels = {
  [EArticleType.Post]: 'Keep reading',
  [EArticleType.Collection]: 'See collection',
  [EArticleType.Print]: 'See more',
}

interface IArticleCard {
  coverUrl: string
  type?: TArticleType
  title: string
  description: string
  date: string
  slug: string
  coverWidth: number
  coverHeight: number
}

const ArticleCard = ({
  coverUrl,
  type = EArticleType.Post,
  title,
  description,
  date,
  slug,
  coverWidth,
  coverHeight,
}: IArticleCard) => {
  const linkButtonLabel = buttonsLabels[type]

  return (
    <Grid gap={4} templateColumns={{ base: 'auto', sm: '35% auto' }}>
      <Image
        src={coverUrl}
        alt={title}
        width="100%"
        htmlWidth={coverWidth}
        htmlHeight={coverHeight}
        objectFit="contain"
        objectPosition="center"
        loading="lazy"
      />
      <Grid gap={4} height="fit-content">
        <ArticleCardRow>
          <Heading variant="h4">{title}</Heading>
        </ArticleCardRow>
        <Body>{description}</Body>
        <ArticleCardRow>
          <If condition={type === EArticleType.Print}>
            <Then>
              <Heading variant="h5" color="primary.normal">
                {date}
              </Heading>
            </Then>
            <Else>
              <Body color="opaque" weight="light">
                {date}
              </Body>
            </Else>
          </If>
          <GoToButton href={slug} label={linkButtonLabel} />
        </ArticleCardRow>
      </Grid>
    </Grid>
  )
}

export default ArticleCard
