import { Logo } from 'components/atoms/Icons'
import Flex from 'components/atoms/Flex'
import { Heading } from 'components/atoms/Typography'

const NavbarTitle = () => (
  <Flex gap="16px">
    <Logo boxSize={25} marginTop="2px" />
    <Heading variant="h4">The Photography Journey</Heading>
  </Flex>
)

export { NavbarTitle }
