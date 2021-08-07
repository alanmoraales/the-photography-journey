import Link from 'components/atoms/Link'
import Flex from 'components/atoms/Flex'
import { GoToArrow } from 'components/atoms/Icons'
import { Heading } from 'components/atoms/Typography'

interface IGoToButton {
  href?: string
  label?: string
}

const GoToButton = ({ href = '#', label = 'Go' }: IGoToButton) => (
  <Link href={href}>
    <Flex
      gap={2}
      alignItems="center"
      sx={{
        color: 'neutral.black.normal',
        '&:hover': {
          color: 'primary.normal',
        },
      }}
    >
      <Heading variant="h6" textDecoration="underline" color="inherit">
        {label}
      </Heading>
      <GoToArrow color="inherit" />
    </Flex>
  </Link>
)

export default GoToButton
