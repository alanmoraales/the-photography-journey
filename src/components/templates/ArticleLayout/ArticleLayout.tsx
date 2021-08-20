import { FC } from 'react'
import { Box, SlideFade } from '@chakra-ui/react'
import Head from '@atoms/Head'
import { ArticleHeader } from '@molecules/Article'
import { GetEnumKeys } from 'utils/common'
import { EArticleType } from '@declarations/article'

interface IArticleLayout {
  title: string
  type?: GetEnumKeys<typeof EArticleType>
  date: string
  description: string
  socialMediaCoverUrl: string
  slug: string
  keywords: string
}

const ArticleLayout: FC<IArticleLayout> = ({
  children,
  title,
  description,
  socialMediaCoverUrl,
  slug,
  keywords,
  ...headerProps
}) => (
  <>
    <Head title={`${title} | The Photography Journey`}>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        property="og:title"
        content={`${title} | The Photography Journey`}
      />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={socialMediaCoverUrl} />
      <meta
        property="og:url"
        content={`https://journey.alanmoraales.live${slug}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="The Photography Journey" />
      <meta name="twitter:image:alt" content="The Photography Journey" />
    </Head>
    <SlideFade in>
      <Box pt={16}>
        <ArticleHeader
          title={title}
          {...headerProps}
          url={`https://journey.alanmoraales.live${slug}`}
        />
        <Box
          sx={{
            margin: '0 auto',
            maxWidth: '70ch',
            paddingTop: 8,
            padding: 6,
            '& p': {
              fontSize: 'blogParagraph',
              paddingBottom: 4,
              color: 'neutral.black.normal',
            },
            '& h4': {
              fontFamily: 'heading',
              fontSize: 'h4',
              paddingBottom: 4,
              paddingTop: 6,
              color: 'neutral.black.normal',
            },
            '& img': {
              paddingTop: 6,
              paddingBottom: 6,
            },
            '& blockquote': {
              padding: 4,
              marginTop: 6,
              marginBottom: 6,
            },
            '& blockquote p::before, & blockquote p::after': {
              content: '"“"',
            },
            '& blockquote p::after': {
              content: '"”"',
            },
            '& a': {
              textDecoration: 'underline',
            },
            '& a:hover': {
              color: 'primary.normal',
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </SlideFade>
  </>
)

export default ArticleLayout
