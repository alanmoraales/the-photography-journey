import { Icon, IconProps } from '@chakra-ui/react'

const GoToArrow = (props: IconProps) => (
  <Icon color="neutral.black.normal" viewBox="0 0 12 9" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.146.307a.51.51 0 01.162-.135.415.415 0 01.384 0 .51.51 0 01.162.135l3 3.75a.652.652 0 01.109.203.763.763 0 010 .48.652.652 0 01-.109.202l-3 3.75a.456.456 0 01-.354.184.456.456 0 01-.354-.184.713.713 0 01-.147-.442c0-.166.053-.325.147-.443L10.793 4.5 8.146 1.192A.653.653 0 018.037.99a.763.763 0 010-.48.653.653 0 01.109-.203z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M0 4.5c0-.166.053-.325.146-.442A.456.456 0 01.5 3.875H11c.133 0 .26.066.354.183a.712.712 0 01.146.442.712.712 0 01-.146.442.456.456 0 01-.354.183H.5a.456.456 0 01-.354-.183A.712.712 0 010 4.5z"
      clipRule="evenodd"
    />
  </Icon>
)

export { GoToArrow }
