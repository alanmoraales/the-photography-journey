import { FC } from 'react'
import { Flex as ChakraFlex, FlexProps, useTheme } from '@chakra-ui/react'

interface IFlex extends FlexProps {
  gap?: string | number
}

const Flex: FC<IFlex> = ({ children, gap = '0', ...restOfProps }) => {
  const theme = useTheme()
  const themeGap = theme.space[gap]
  const calculatedGap = themeGap || gap

  return (
    <ChakraFlex {...restOfProps} style={{ gap: calculatedGap }}>
      {children}
    </ChakraFlex>
  )
}

export default Flex
