import { FC } from 'react'
import { Text } from '@chakra-ui/react'
import { GetEnumKeys } from 'utils/common'
import { EBodyVariants } from 'shared/types/design'
import { IBaseTypography, typographyColors } from '../IBaseTypography'

const bodyWeights = {
  light: 'light',
  normal: 'normal',
  medium: 'medium',
}

interface IBody extends IBaseTypography {
  variant?: GetEnumKeys<typeof EBodyVariants>
  weight?: keyof typeof bodyWeights
}

const Body: FC<IBody> = ({
  children,
  variant = 'paragraph',
  color = 'normal',
  weight = 'normal',
}) => (
  <Text fontSize={variant} fontWeight={weight} color={typographyColors[color]}>
    {children}
  </Text>
)

export default Body
