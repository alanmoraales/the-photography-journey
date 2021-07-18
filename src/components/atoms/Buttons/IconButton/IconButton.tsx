import { IconButton as ChakraIconButton } from '@chakra-ui/react'
import { ShareIcon } from 'components/atoms/Icons'

interface IIcon {
  boxSize: string
  color: string
}

interface IIconButton {
  ariaLabel: string
  icon: (props: IIcon) => JSX.Element
}

const IconButton = ({ ariaLabel, icon: Icon }: IIconButton) => (
  <ChakraIconButton
    aria-label={ariaLabel}
    icon={<Icon boxSize="21px" color="inherit" />}
    bg="transparent"
    sx={{
      color: 'neutral.black.normal',
      '&:hover': {
        bg: 'transparent',
        color: 'primary.normal',
      },
    }}
  />
)

export default IconButton
