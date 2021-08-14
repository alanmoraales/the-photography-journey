import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import { ICssImagePlaceholder } from '@declarations/image'

interface IImagePlaceholder {
  cssPlaceholder: ICssImagePlaceholder
  blur?: string
  scale?: number
  width?: number | string
  height?: number | string
}

const ImagePlaceholder: FC<IImagePlaceholder> = ({
  cssPlaceholder,
  blur = '30px',
  scale = 1.3,
  width = '100%',
  height = '100%',
  children,
}) => (
  <Box
    display="block"
    position="relative"
    width={width}
    height={height}
    overflow="hidden"
  >
    <Box
      filter={`blur(${blur})`}
      height={height}
      left={0}
      position="absolute"
      top={0}
      transform={`scale(${scale})`}
      width={width}
      sx={{ ...cssPlaceholder }}
    />
    {children}
  </Box>
)

export default ImagePlaceholder
