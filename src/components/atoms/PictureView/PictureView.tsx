import { Box } from '@chakra-ui/react'
import NextImage from 'next/image'
import type { IImage } from '@declarations/image'

interface IPictureView extends IImage {
  top: number
  left: number
}

const PictureView = ({
  src,
  top,
  left,
  width,
  height,
  base64Placeholder,
}: IPictureView) => (
  <Box
    key={src}
    position="absolute"
    top={top}
    left={left}
    width={width}
    height={height}
  >
    <NextImage
      alt={src}
      src={src}
      layout="fill"
      placeholder="blur"
      blurDataURL={base64Placeholder}
    />
  </Box>
)

export default PictureView
