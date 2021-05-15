import { Icon, IconProps } from '@chakra-ui/react'
import { colors } from 'theme/constants'

const { cultured, vividViolet, blueViolet } = colors

const BrandLogo = (props: IconProps) => (
  <Icon viewBox="0 0 29 29" fill="none" {...props}>
    <circle cx="14.5" cy="14.5" r="12.5" fill={cultured} />
    <path
      d="M14.5 22.2388C18.7725 22.2388 22.2361 18.774 22.2361 14.4999C22.2361 10.2259 18.7725 6.76108 14.5 6.76108C10.2275 6.76108 6.76393 10.2259 6.76393 14.4999C6.76393 18.774 10.2275 22.2388 14.5 22.2388Z"
      stroke={blueViolet}
      stroke-width="1.09375"
      stroke-miterlimit="10"
    />
    <path
      d="M14.5 27C21.4036 27 27 21.4036 27 14.5C27 7.59644 21.4036 2 14.5 2C7.59644 2 2 7.59644 2 14.5C2 21.4036 7.59644 27 14.5 27Z"
      stroke={vividViolet}
      stroke-width="2.1875"
      stroke-miterlimit="10"
    />
  </Icon>
)

export default BrandLogo
