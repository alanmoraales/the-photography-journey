import { NavbarContainer, NavbarTitle } from 'components/atoms/Navbar'
import { HamburgerMenu } from 'components/atoms/Icons'

const Navbar = () => (
  <NavbarContainer>
    <NavbarTitle />
    <HamburgerMenu boxSize={25} marginTop="2px" />
  </NavbarContainer>
)

export default Navbar
