import Link from 'next/link'
import Flex from '@atoms/Flex'
import Heading from '@atoms/typography/Heading'
import Logo from '@atoms/icons/Logo'
import routes from '@constants/routes'

const { home } = routes

const NavbarTitle = () => (
  <Link href={home} passHref>
    <a>
      <Flex gap={4}>
        <Logo boxSize={25} />
        <Heading variant="h5">The Photography Journey</Heading>
      </Flex>
    </a>
  </Link>
)

export { NavbarTitle }
