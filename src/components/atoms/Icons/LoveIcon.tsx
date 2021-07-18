import { Icon, IconProps } from '@chakra-ui/react'

const LoveIcon = (props: IconProps) => (
  <Icon color="neutral.black.normal" viewBox="0 0 22 21" {...props}>
    <path
      d="M6 1.88878C3.239 1.88878 1 4.10478 1 6.83878C1 9.04578 1.875 14.2838 10.488 19.5788C10.6423 19.6727 10.8194 19.7223 11 19.7223C11.1806 19.7223 11.3577 19.6727 11.512 19.5788C20.125 14.2838 21 9.04578 21 6.83878C21 4.10478 18.761 1.88878 16 1.88878C13.239 1.88878 11 4.88878 11 4.88878C11 4.88878 8.761 1.88878 6 1.88878Z"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export { LoveIcon }
