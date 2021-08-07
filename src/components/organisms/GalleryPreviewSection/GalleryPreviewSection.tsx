import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import useJustifiedLayout from 'use-justified-layout'
import ContainerWithSizes, { ISizes } from 'components/atoms/ContainerWithSizes'
import Portview from 'components/atoms/Portview'
import Section from 'components/templates/Section'
import images from 'data/galleryImages'

const GalleryPreviewSection = () => {
  const [galleryContainerWidth, setGalleryContainerWidth] = useState(0)
  const [layout] = useJustifiedLayout({
    layoutInput: images,
    configuration: {
      containerPadding: 0,
      containerWidth: galleryContainerWidth,
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
          {boxes.map((box, index) => (
            <Portview
              key={`${images[index].url}-${index}`}
              imageURL={images[index].url}
              left={box.left}
              width={box.width}
              height={box.height}
              top={box.top}
            />
          ))}
        </ContainerWithSizes>
      </Box>
    </Section>
  )
}

export default GalleryPreviewSection
