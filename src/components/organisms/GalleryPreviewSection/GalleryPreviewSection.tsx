import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import useJustifiedLayout from 'use-justified-layout'
import LazyImage from 'react-lazy-blur-image'
import ContainerWithSizes, { ISizes } from 'components/atoms/ContainerWithSizes'
import Section from 'components/templates/Section'
import type { IImage } from 'shared/types/image'

interface IGalleryPreviewSection {
  images: IImage[]
}

const GalleryPreviewSection = ({ images }: IGalleryPreviewSection) => {
  const [galleryContainerWidth, setGalleryContainerWidth] = useState(0)
  const [layout] = useJustifiedLayout({
    layoutInput: images,
    configuration: {
      containerPadding: 0,
      containerWidth: galleryContainerWidth,
      showWidows: false,
    },
    dependencies: [galleryContainerWidth],
  })
  const { boxes, containerHeight } = layout

  const onSizesChange = (sizes: ISizes) => {
    setGalleryContainerWidth(sizes.width)
  }

  return (
    <Section title="Gallery">
      <Box width="100%" height={containerHeight}>
        <ContainerWithSizes onSizeChange={onSizesChange}>
          {boxes.map((box, index) => {
            const { smallWebp, smallJpg, placeholder } = images[index]
            const { left, width, height, top } = box
            return (
              <picture key={`${smallJpg}-${index}`}>
                <source srcSet={smallWebp} />
                <LazyImage
                  placeholder={placeholder}
                  uri={smallJpg}
                  render={(src, style) => (
                    <img
                      loading="lazy"
                      alt={smallWebp}
                      src={src}
                      width={width}
                      height={height}
                      style={{
                        ...style,
                        position: 'absolute',
                        top,
                        left,
                      }}
                    />
                  )}
                />
              </picture>
            )
          })}
        </ContainerWithSizes>
      </Box>
    </Section>
  )
}

export default GalleryPreviewSection
