import Flex from '@atoms/Flex'
import Heading from '@atoms/typography/Heading'
import Logo from '@atoms/icons/Logo'

const NavbarTitle = () => (
  <Flex gap={4}>
    <Logo boxSize={25} marginTop={0.5} />
    <Heading variant="h4">The Photography Journey</Heading>
  </Flex>
)

export { NavbarTitle }
