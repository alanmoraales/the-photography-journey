import { Box, Image } from '@chakra-ui/react'
import VisibilitySensor from 'react-visibility-sensor'
import ImagePlaceholder from '@atoms/ImagePlaceholder'
import useShouldDisplayImage from 'hooks/useShouldDisplayImage'
import type { IImage } from '@declarations/image'

interface IPictureView extends IImage {
  top: number
  left: number
}

const PictureView = ({
  smallJpg,
  smallWebp,
  top,
  left,
  width,
  height,
  css,
}: IPictureView) => {
  const { shouldDisplayImage, onImageLoaded, onImageVisibilityChange } =
    useShouldDisplayImage()
  const offset = -1000

  return (
    <VisibilitySensor
      onChange={onImageVisibilityChange}
      partialVisibility
      resizeCheck
      offset={{
        top: offset,
        bottom: offset,
      }}
    >
      <Box
        key={smallJpg}
        position="absolute"
        top={top}
        left={left}
        width={width}
        height={height}
      >
        <ImagePlaceholder cssPlaceholder={css}>
          <picture>
            <source srcSet={smallWebp} />
            <Image
              loading="lazy"
              onLoad={onImageLoaded}
              alt={smallJpg}
              src={smallJpg}
              width={width}
              height={height}
              position="absolute"
              top={0}
              left={0}
              opacity={shouldDisplayImage ? 1 : 0}
            />
          </picture>
        </ImagePlaceholder>
      </Box>
    </VisibilitySensor>
  )
}

export default PictureView
