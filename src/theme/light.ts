import { extendTheme } from '@chakra-ui/react'
import { colors, fonts } from './constants'

const {
  vividViolet,
  blueViolet,
  russianViolet,
  cultured,
  spanishGray,
  jet,
  eerieBlack,
} = colors

const { nunitoSans, robotoSlab } = fonts

const lightTheme = extendTheme({
  colors: {
    primary: {
      light: vividViolet,
      normal: blueViolet,
      dark: russianViolet,
    },
    neutral: {
      white: {
        normal: cultured,
      },
      gray: {
        normal: spanishGray,
      },
      black: {
        light: jet,
        dark: eerieBlack,
      },
    },
  },
  fonts: {
    body: nunitoSans,
    heading: robotoSlab,
  },
})

export { lightTheme }
