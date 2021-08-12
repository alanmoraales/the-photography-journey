import { Grid } from '@chakra-ui/react'
import GoBackButton from 'components/atoms/Buttons/GoBackButton'
import ShareButton from 'components/atoms/Buttons/ShareButton'
import Flex from 'components/atoms/Flex'
import { Heading, Body } from 'components/atoms/Typography'
import { EArticleType } from 'shared/types/article'
import { GetEnumKeys } from 'utils/common'

interface IArticleHeader {
  title: string
  type?: GetEnumKeys<typeof EArticleType>
  date: string
}

const ArticleHeader = ({ title, type = 'Post', date }: IArticleHeader) => (
  <Grid bg="glass" placeItems="center">
    <Grid padding={6} maxWidth="70ch" gap={8} width="100%">
      <Grid gap={2}>
        <Heading>{title}</Heading>
        <Flex gap={2}>
          <Body color="primary">{type}</Body>
          <Body color="opaque" weight="light">
            &bull;
          </Body>
          <Body color="opaque" weight="light">
            {date}
          </Body>
        </Flex>
      </Grid>
      <Flex justifyContent="space-between" alignItems="center">
        <GoBackButton />
        <Flex gap={4} alignItems="center">
          <ShareButton />
        </Flex>
      </Flex>
    </Grid>
  </Grid>
)

export { ArticleHeader }
