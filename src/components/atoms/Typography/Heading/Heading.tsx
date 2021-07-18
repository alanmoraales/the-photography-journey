import { FC } from 'react'
import { Heading as ChakraHeading } from '@chakra-ui/react'
import { EHeadingVariants } from 'shared/types/design'
import { GetEnumKeys } from 'utils/common'

interface IHeading {
  variant?: GetEnumKeys<typeof EHeadingVariants>
  textDecoration?: 'none' | 'underline'
  color?: string
}

const Heading: FC<IHeading> = ({
  children,
  variant = 'h1',
  textDecoration = 'none',
  color = 'neutral.black.normal',
}) => (
  <ChakraHeading
    fontWeight="inherit"
    fontSize={variant}
    as={variant}
    color={color}
    textDecoration={textDecoration}
  >
    {children}
  </ChakraHeading>
)

export { Heading }
