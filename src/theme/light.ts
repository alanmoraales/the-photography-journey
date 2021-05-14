import { extendTheme } from '@chakra-ui/react'
import { colors } from './constants'

const {
  vividViolet,
  blueViolet,
  russianViolet,
  cultured,
  spanishGray,
  jet,
  eerieBlack,
} = colors

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
})

export { lightTheme }
