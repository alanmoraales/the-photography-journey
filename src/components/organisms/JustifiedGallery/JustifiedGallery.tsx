import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import useJustifiedLayout from 'use-justified-layout'
import ContainerWithSizes, { ISizes } from '@atoms/ContainerWithSizes'
import PictureView from '@atoms/PictureView'
import type { IImage } from '@declarations/image'

interface IJustifiedGallery {
  images: IImage[]
}

const JustifiedGallery = ({ images }: IJustifiedGallery) => {
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
    <Box width="100%" height={containerHeight}>
      <ContainerWithSizes onSizeChange={onSizesChange}>
        {boxes.map((box, index) => {
          const image = images[index]
          return <PictureView {...image} {...box} key={image.smallJpg} />
        })}
      </ContainerWithSizes>
    </Box>
  )
}

export default JustifiedGallery
