import { extendTheme } from '@chakra-ui/react'
import { colors } from 'shared/constants/design'
import { baseTheme } from './baseTheme'

const {
  vividViolet,
  blueViolet,
  russianViolet,
  cultured,
  culturedRGB,
  spanishGray,
  jet,
  eerieBlack,
} = colors

const light = extendTheme({
  ...baseTheme,
  colors: {
    background: cultured,
    glass: `rgba(${culturedRGB}, 0.8)`,
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
