const typographyColors = {
  normal: 'neutral.black.normal',
  primary: 'primary.normal',
  opaque: 'neutral.black.light',
}

interface IBaseTypography {
  color?: keyof typeof typographyColors
}

export { typographyColors }
export type { IBaseTypography }
