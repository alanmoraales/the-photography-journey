import { fonts, fontSizes } from 'shared/constants/design'
import { EHeadingVariants, EBodyVariants } from 'shared/types/design'

const { nunitoSans, robotoSlab } = fonts

type THeadingFontSizes = {
  [K in EHeadingVariants]: string
}

const headingFontSizes: THeadingFontSizes = {
  [EHeadingVariants.h1]: `clamp(${fontSizes['6xl']}, 3vw, ${fontSizes['8xl']})`,
  [EHeadingVariants.h4]: `clamp(${fontSizes.xl}, 2vw, ${fontSizes['3xl']})`,
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
