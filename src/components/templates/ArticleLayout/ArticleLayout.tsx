import { FC } from 'react'
import { Box, SlideFade } from '@chakra-ui/react'
import Head from '@atoms/Head'
import { ArticleHeader } from '@molecules/Article'
import { GetEnumKeys, getArticleUrl } from 'utils/common'
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
}) => {
  const pageTitle = `${title} | The Photography Journey`
  const articleUrl = getArticleUrl(slug)

  return (
    <>
      <Head
        title={pageTitle}
        seoMetadata={{
          description,
          keywords,
          ogTitle: pageTitle,
          ogImageSrc: socialMediaCoverUrl,
          ogUrl: articleUrl,
        }}
      />
      <SlideFade in>
        <Box pt={16}>
          <ArticleHeader title={title} {...headerProps} url={articleUrl} />
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
              '& h5': {
                fontFamily: 'heading',
                fontSize: 'h5',
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
}

export default ArticleLayout
