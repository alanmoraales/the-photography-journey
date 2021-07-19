import { Box, Grid } from '@chakra-ui/react'
import GoBackButton from 'components/atoms/Buttons/GoBackButton'
import ShareButton from 'components/atoms/Buttons/ShareButton'
import LoveButton from 'components/atoms/Buttons/LoveButton'
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
  <Box bg="glass" display="grid" placeItems="center">
    <Grid padding={6} maxWidth="70ch" gap={8} width="100%">
      <Grid gap={2}>
        <Heading>{title}</Heading>
        <Flex gap="8px">
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
        <Flex gap="8px" alignItems="center">
          <ShareButton />
          <LoveButton />
        </Flex>
      </Flex>
    </Grid>
  </Box>
)

export { ArticleHeader }
