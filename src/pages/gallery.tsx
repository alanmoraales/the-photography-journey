import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getPlaiceholder } from 'plaiceholder'
import PageTemplate from '@templates/PageTemplate'
import JustifiedGallery from '@organisms/JustifiedGallery'
import Head from '@atoms/Head'
import images from 'data/galleryImages'
import seoMetadata from 'data/seoMetadata'
import { useEffect } from 'react'
import mixpanelService from 'mixpanel'

export const getStaticProps: GetStaticProps = async () => {
  const imagesWithPlaceholder = await Promise.all(
    images.map(async (image) => {
      const { css, img, base64 } = await getPlaiceholder(image.src)
      return {
        ...image,
        width: img.width,
        height: img.height,
        css,
        base64Placeholder: base64,
      }
    })
  )

  return {
    props: {
      images: imagesWithPlaceholder,
    },
  }
}

const Home = ({ images }: InferGetStaticPropsType<typeof getStaticProps>) => {
  useEffect(() => {
    mixpanelService.trackUserEnteredGallery()
  }, [])

  return (
    <>
      <Head
        title="Gallery | The Photography Journey"
        seoMetadata={seoMetadata.gallery}
      />
      <PageTemplate>
        <JustifiedGallery images={images} />
      </PageTemplate>
    </>
  )
}

export default Home
