import { IconButton as ChakraIconButton } from '@chakra-ui/react'

interface IIcon {
  boxSize: string
  color: string
}

interface IIconButton {
  ariaLabel: string
  icon: (props: IIcon) => JSX.Element
  onClick?: () => void
  boxSize?: string
}

const IconButton = ({
  ariaLabel,
  icon: Icon,
  onClick = () => {},
  boxSize = '21px',
}: IIconButton) => (
  <ChakraIconButton
    onClick={onClick}
    aria-label={ariaLabel}
    icon={<Icon boxSize={boxSize} color="inherit" />}
    bg="transparent"
    sx={{
      color: 'neutral.black.normal',
      '&:hover': {
        bg: 'transparent',
        color: 'primary.normal',
      },
    }}
    width="auto"
    height="auto"
    minWidth="unset"
  />
)

export default IconButton
