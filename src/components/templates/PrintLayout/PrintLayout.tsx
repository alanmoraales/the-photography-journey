import { FC, useEffect } from 'react'
import { Box, SlideFade } from '@chakra-ui/react'
import Flickity from 'react-flickity-component'
import Head from '@atoms/Head'
import { getArticleUrl } from 'utils/common'
import { PrintHeader } from '@molecules/Print'
import PageTemplate from '@templates/PageTemplate/PageTemplate'
import mixpanelService from 'mixpanel'

interface IPrintLayout {
  title: string
  size: string
  description: string
  socialMediaCoverUrl: string
  slug: string
  keywords: string
  price: string
  carouselImages: { src: string; alt: string }[]
}

const carouselOptions = {
  initialIndex: 0,
  wrapAround: true,
}

const PrintLayout: FC<IPrintLayout> = ({
  children,
  title,
  description,
  socialMediaCoverUrl,
  slug,
  keywords,
  carouselImages,
  ...headerProps
}) => {
  const pageTitle = `${title} | The Photography Journey`
  const articleUrl = getArticleUrl(slug)

  useEffect(() => {
    mixpanelService.trackUserViewedPrint({ printTitle: title })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
              gap={{ base: 8, md: 16 }}
            >
              <PrintHeader title={title} {...headerProps} url={articleUrl} />
              <Box>
                <Box overflow="hidden">
                  <Flickity options={carouselOptions}>
                    {carouselImages.map((image) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={image.src}
                        style={{ marginLeft: 5, marginRight: 5 }}
                        src={image.src}
                        alt={image.alt}
                      />
                    ))}
                  </Flickity>
                </Box>
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
            </Box>
          </SlideFade>
        </Box>
      </PageTemplate>
    </>
  )
}

export default PrintLayout
