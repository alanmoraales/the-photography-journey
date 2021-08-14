import { Icon, IconProps } from '@chakra-ui/react'

const CloseIcon = (props: IconProps) => (
  <Icon color="neutral.black.normal" viewBox="0 0 13 13" {...props}>
    <path
      fill="currentColor"
      d="M7.416 6.004l4.3-4.29a1.004 1.004 0 10-1.42-1.42l-4.29 4.3-4.29-4.3a1.004 1.004 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 00.325 1.639 1 1 0 001.095-.219l4.29-4.3 4.29 4.3a1.002 1.002 0 001.639-.325 1 1 0 00-.22-1.095l-4.3-4.29z"
    />
  </Icon>
)

export default CloseIcon
