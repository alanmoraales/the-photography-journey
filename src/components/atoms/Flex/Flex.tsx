import { FC } from 'react'
import { Flex as ChakraFlex, FlexProps } from '@chakra-ui/react'

interface IFlex extends FlexProps {
  gap?: string
}

const Flex: FC<IFlex> = ({ children, gap = '0', ...restOfProps }) => (
  <ChakraFlex {...restOfProps} style={{ gap: gap }}>
    {children}
  </ChakraFlex>
)

export default Flex
