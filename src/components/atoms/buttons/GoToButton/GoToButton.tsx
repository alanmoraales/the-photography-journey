import Link from '@atoms/Link'
import Flex from '@atoms/Flex'
import Heading from '@atoms/typography/Heading'
import GoToArrow from '@atoms/icons/GoToArrow'

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
