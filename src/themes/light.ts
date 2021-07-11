import { extendTheme } from '@chakra-ui/react'
import { colors } from 'shared/constants/design'
import { baseTheme } from './baseTheme'

const {
  vividViolet,
  blueViolet,
  russianViolet,
  cultured,
  spanishGray,
  jet,
  eerieBlack,
} = colors

const light = extendTheme({
  ...baseTheme,
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
        normal: eerieBlack,
      },
    },
  },
})

export { light }
