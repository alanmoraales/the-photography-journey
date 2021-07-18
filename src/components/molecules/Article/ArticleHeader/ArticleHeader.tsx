import { Box } from '@chakra-ui/react'
import { BackArrow, LoveIcon, ShareIcon } from 'components/atoms/Icons'
import { Heading, Body } from 'components/atoms/Typography'
import { EArticleType } from 'shared/types/article'
import { GetEnumKeys } from 'utils/common'

interface IArticleHeader {
  title: string
  type?: GetEnumKeys<typeof EArticleType>
  date: string
}

const ArticleHeader = ({ title, type = 'Post', date }: IArticleHeader) => (
  <Box
    bg="glass"
    display="grid"
    placeItems="center"
    position="sticky"
    top="0px"
    style={{ backdropFilter: 'blur(12px)' }}
  >
    <Box
      display="grid"
      padding="6"
      maxWidth="75ch"
      style={{ gap: '32px' }}
      width="100%"
    >
      <Box display="grid" style={{ gap: '8px' }}>
        <Heading>{title}</Heading>
        <Box display="flex" style={{ gap: '8px' }}>
          <Body color="primary">{type}</Body>
          <Body color="opaque" weight="light">
            •
          </Body>
          <Body color="opaque" weight="light">
            {date}
          </Body>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" style={{ gap: '8px' }} alignItems="center">
          <BackArrow />
          <Heading variant="h6" textDecoration="underline">
            Go back
          </Heading>
        </Box>
        <Box display="flex" style={{ gap: '16px' }} alignItems="center">
          <ShareIcon boxSize="21px" />
          <LoveIcon boxSize="21px" />
        </Box>
      </Box>
    </Box>
  </Box>
)

export { ArticleHeader }
