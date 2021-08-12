import { Icon, IconProps } from '@chakra-ui/react'

const HamburgerMenu = (props: IconProps) => (
  <Icon color="neutral.black.normal" viewBox="0 0 30 23" {...props}>
    <path stroke="currentColor" strokeWidth="2" d="M0 22h30M0 1h30M0 11.5h30" />
  </Icon>
)

export default HamburgerMenu
