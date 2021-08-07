import styled from '@emotion/styled'
import { Grid } from '@chakra-ui/react'
import GoToButton from 'components/atoms/Buttons/GoToButton'
import { ArticleCardRow } from 'components/atoms/ArticleCard'
import { EArticleType, TArticleType } from 'shared/types/article'
import { Heading, Body } from 'components/atoms/Typography'

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 200px;
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
