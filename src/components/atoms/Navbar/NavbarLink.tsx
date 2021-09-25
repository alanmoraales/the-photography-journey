import { FC } from 'react'
import Link from '@atoms/Link'
import Heading from '@atoms/typography/Heading'

interface INavbarLink {
  href?: string
}

const NavbarLink: FC<INavbarLink> = ({ href = '#', children }) => (
  <Link href={href}>
    <Heading
      variant="h6"
      textDecoration="none"
      color="inherit"
      sx={{
        '&:hover': {
          textDecoration: 'underline',
          color: 'primary.normal',
        },
      }}
    >
      {children}
    </Heading>
  </Link>
)

export { NavbarLink }
