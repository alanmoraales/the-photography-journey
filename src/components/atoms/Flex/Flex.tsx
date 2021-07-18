import { FC } from 'react'
import { Flex as ChakraFlex, FlexProps } from '@chakra-ui/react'

interface IFlex extends FlexProps {
  gap?: string
}

const Flex: FC<IFlex> = ({ children, gap = '0px', ...restOfProps }) => (
  <ChakraFlex
    {...restOfProps}
    sx={{
      gap: gap,
    }}
  >
    {children}
  </ChakraFlex>
)

export default Flex
