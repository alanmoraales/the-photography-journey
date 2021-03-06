import { fonts, fontSizes } from '@constants/design'
import { EHeadingVariants, EBodyVariants } from '@declarations/design'

const { nunitoSans, robotoSlab } = fonts

type THeadingFontSizes = {
  [K in EHeadingVariants]: string
}

const headingFontSizes: THeadingFontSizes = {
  [EHeadingVariants.h1]: `clamp(${fontSizes['7xl']}, 3vw, ${fontSizes['8xl']})`,
  [EHeadingVariants.h4]: `clamp(${fontSizes.xl}, 2vw, ${fontSizes['3xl']})`,
  [EHeadingVariants.h5]: `clamp(${fontSizes.lg}, 2vw, ${fontSizes['2xl']})`,
  [EHeadingVariants.h6]: `clamp(${fontSizes.md}, 1vw, ${fontSizes.lg})`,
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
        fontSize: fontSizes.base,
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
