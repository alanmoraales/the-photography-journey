import { FC } from 'react'
import { Heading as ChakraHeading } from '@chakra-ui/react'
import { EHeadingVariants } from 'shared/types/design'
import { GetEnumKeys } from 'utils/common'

interface IHeading {
  variant?: GetEnumKeys<typeof EHeadingVariants>
}

const Heading: FC<IHeading> = ({ children, variant = 'h1' }) => (
  <ChakraHeading
    fontWeight="inherit"
    fontSize={variant}
    as={variant}
    color="neutral.black.normal"
  >
    {children}
  </ChakraHeading>
)

export { Heading }
