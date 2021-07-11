import { fonts, fontSizes } from 'shared/constants/design'
import { EHeadingVariants } from 'shared/types/design'

const { nunitoSans, robotoSlab } = fonts

type THeadingFontSizes = {
  [K in EHeadingVariants]: string
}

const headingFontSizes: THeadingFontSizes = {
  [EHeadingVariants.h1]: `clamp(${fontSizes['3xl']}, 3vw, ${fontSizes['5xl']})`,
}

const baseTheme = {
  fonts: {
    body: nunitoSans,
    heading: robotoSlab,
  },
  fontSizes: {
    ...headingFontSizes,
  },
}

export { baseTheme }
