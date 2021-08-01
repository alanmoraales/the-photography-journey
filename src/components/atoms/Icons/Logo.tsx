import { Icon, IconProps } from '@chakra-ui/react'

const Logo = (props: IconProps) => (
  <Icon color="primary.normal" viewBox="0 0 29 29" {...props}>
    <circle cx="14.5" cy="14.5" r="12.5" fill="#f9f9f9" />
    <path
      fill="none"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeWidth="1.094"
      d="M14.5 22.239a7.738 7.738 0 007.736-7.74A7.738 7.738 0 0014.5 6.762 7.737 7.737 0 006.764 14.5a7.737 7.737 0 007.736 7.739z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeWidth="2.188"
      d="M14.5 27C21.404 27 27 21.404 27 14.5S21.404 2 14.5 2 2 7.596 2 14.5 7.596 27 14.5 27z"
    />
  </Icon>
)

export { Logo }
