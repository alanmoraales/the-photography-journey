import router from 'next/router'
import Link from 'components/atoms/Link'
import Flex from 'components/atoms/Flex'
import { BackArrow } from 'components/atoms/Icons'
import { Heading } from 'components/atoms/Typography'

interface IGoBackButton {
  href?: string
  label?: string
}

const onGoBack = () => {
  router.back()
}

const GoBackButton = ({ href = '#', label = 'Go back' }: IGoBackButton) => (
  <Link onClick={onGoBack}>
    <Flex
      gap="8px"
      alignItems="center"
      sx={{
        color: 'neutral.black.normal',
        '&:hover': {
          color: 'primary.normal',
        },
      }}
    >
      <BackArrow color="inherit" />
      <Heading variant="h6" textDecoration="underline" color="inherit">
        {label}
      </Heading>
    </Flex>
  </Link>
)

export default GoBackButton
