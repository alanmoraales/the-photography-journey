import { FC } from 'react'
import { Box, SlideFade } from '@chakra-ui/react'
import Head from '@atoms/Head'
import { getArticleUrl } from 'utils/common'
import { PrintHeader } from '@molecules/Print'
import PageTemplate from '@templates/PageTemplate/PageTemplate'

interface IPrintLayout {
  title: string
  size: string
  description: string
  socialMediaCoverUrl: string
  slug: string
  keywords: string
  price: string
}

const PrintLayout: FC<IPrintLayout> = ({
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
      <PageTemplate>
        <Box width="100%">
          <SlideFade in>
            <Box
              display="grid"
              gridTemplateColumns={{ base: '1fr', md: '30% 1fr' }}
              gap={{ base: 0, md: 16 }}
            >
              <PrintHeader title={title} {...headerProps} url={articleUrl} />
              <Box
                sx={{
                  paddingTop: 8,
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
                    paddingTop: 0,
                    paddingBottom: 4,
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
        </Box>
      </PageTemplate>
    </>
  )
}

export default PrintLayout
