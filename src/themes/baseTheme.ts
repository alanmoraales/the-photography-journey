import { fonts, fontSizes } from 'shared/constants/design'
import { EHeadingVariants, EBodyVariants } from 'shared/types/design'

const { nunitoSans, robotoSlab } = fonts

type THeadingFontSizes = {
  [K in EHeadingVariants]: string
}

const headingFontSizes: THeadingFontSizes = {
  [EHeadingVariants.h1]: `clamp(${fontSizes['5xl']}, 3vw, ${fontSizes['7xl']})`,
}

type TBodyFontSizes = {
  [K in EBodyVariants]: string
}

const bodyFontSizes: TBodyFontSizes = {
  [EBodyVariants.paragraph]: `clamp(${fontSizes.md}, 1vw, ${fontSizes.lg})`,
  [EBodyVariants.blogParagraph]: `clamp(${fontSizes.lg}, 1vw, ${fontSizes['2xl']})`,
}

const baseTheme = {
  styles: {
    global: {
      'html, body': {
        bg: 'background',
        fontSize: '16px',
      },
    },
  },
  fonts: {
    body: nunitoSans,
    heading: robotoSlab,
  },
  fontSizes: {
    ...headingFontSizes,
    ...bodyFontSizes,
  },
}

export { baseTheme }