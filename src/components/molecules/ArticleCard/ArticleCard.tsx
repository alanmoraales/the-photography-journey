import styled from '@emotion/styled'
import { Grid, Box } from '@chakra-ui/react'
import LoveButton from 'components/atoms/Buttons/LoveButton'
import GoToButton from 'components/atoms/Buttons/GoToButton'
import Flex from 'components/atoms/Flex'
import { ArticleCardRow } from 'components/atoms/ArticleCard'
import { EArticleType } from 'shared/types/article'
import { GetEnumKeys } from 'utils/common'
import { Heading, Body } from 'components/atoms/Typography'

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 200px;
  object-position: center;
`

interface IArticleCard {
  coverUrl: string
  type?: GetEnumKeys<typeof EArticleType>
  photosCount: number
  title: string
  likesCount: number
  isLiked?: boolean
  description: string
  date: string
  articleSlug: string
}

const ArticleCard = ({
  coverUrl,
  type = EArticleType.Post,
  photosCount,
  title,
  likesCount,
  isLiked = false,
  description,
  date,
  articleSlug,
}: IArticleCard) => {
  const linkButtonLabel =
    type === EArticleType.Post ? 'Keep reading' : 'See collection'

  return (
    <Grid gap={4} templateColumns={{ base: 'auto', sm: '35% auto' }}>
      <Image src={coverUrl} alt={title} />
      <Grid gap={4} height="fit-content">
        <ArticleCardRow>
          <Heading variant="h4">{title}</Heading>
          <Flex
            gap="8px"
            alignItems="center"
            marginTop="2px"
            height="fit-content"
          >
            <LoveButton />
            <Body color="opaque">{likesCount}</Body>
          </Flex>
        </ArticleCardRow>
        <Body>{description}</Body>
        <ArticleCardRow>
          <Body color="opaque" weight="light">
            {date}
          </Body>
          <GoToButton href={articleSlug} label={linkButtonLabel} />
        </ArticleCardRow>
      </Grid>
    </Grid>
  )
}
export default ArticleCard
