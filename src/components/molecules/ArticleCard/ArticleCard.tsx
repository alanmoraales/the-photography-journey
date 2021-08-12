import styled from '@emotion/styled'
import { Grid } from '@chakra-ui/react'
import GoToButton from '@atoms/Buttons/GoToButton'
import Heading from '@atoms/typography/Heading'
import Body from '@atoms/typography/Body'
import { ArticleCardRow } from '@atoms/ArticleCard'
import { EArticleType, TArticleType } from '@types/article'

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  object-position: center;
`

interface IArticleCard {
  coverUrl: string
  type?: TArticleType
  photosCount: number
  title: string
  description: string
  date: string
  slug: string
}

const ArticleCard = ({
  coverUrl,
  type = EArticleType.Post,
  photosCount,
  title,
  description,
  date,
  slug,
}: IArticleCard) => {
  const linkButtonLabel =
    type === EArticleType.Post ? 'Keep reading' : 'See collection'

  return (
    <Grid gap={4} templateColumns={{ base: 'auto', sm: '35% auto' }}>
      <Image src={coverUrl} alt={title} />
      <Grid gap={4} height="fit-content">
        <ArticleCardRow>
          <Heading variant="h4">{title}</Heading>
        </ArticleCardRow>
        <Body>{description}</Body>
        <ArticleCardRow>
          <Body color="opaque" weight="light">
            {date}
          </Body>
          <GoToButton href={slug} label={linkButtonLabel} />
        </ArticleCardRow>
      </Grid>
    </Grid>
  )
}

export default ArticleCard
