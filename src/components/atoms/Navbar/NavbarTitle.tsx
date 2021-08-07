import { Logo } from 'components/atoms/Icons'
import Flex from 'components/atoms/Flex'
import { Heading } from 'components/atoms/Typography'

const NavbarTitle = () => (
  <Flex gap={4}>
    <Logo boxSize={25} marginTop={0.5} />
    <Heading variant="h4">The Photography Journey</Heading>
  </Flex>
)

export { NavbarTitle }
