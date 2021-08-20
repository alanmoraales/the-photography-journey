import { Grid, Tooltip } from '@chakra-ui/react'
import useClipboard from 'react-use-clipboard'
import Flex from '@atoms/Flex'
import ShareButton from '@atoms/buttons/ShareButton'
import GoBackButton from '@atoms/buttons/GoBackButton'
import Heading from '@atoms/typography/Heading'
import Body from '@atoms/typography/Body'
import { EArticleType } from '@declarations/article'
import { GetEnumKeys } from 'utils/common'

interface IArticleHeader {
  title: string
  type?: GetEnumKeys<typeof EArticleType>
  date: string
  url: string
}

const ArticleHeader = ({ title, type = 'Post', date, url }: IArticleHeader) => {
  const [isCopied, setCopied] = useClipboard(url, {
    successDuration: 3000,
  })

  return (
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
            <Tooltip label="Link copied!" isOpen={isCopied}>
              <span>
                <ShareButton onClick={setCopied} />
              </span>
            </Tooltip>
          </Flex>
        </Flex>
      </Grid>
    </Grid>
  )
}

export { ArticleHeader }
