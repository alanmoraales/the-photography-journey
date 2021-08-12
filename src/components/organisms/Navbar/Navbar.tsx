import { NavbarContainer, NavbarTitle } from '@atoms/Navbar'
import HamburgerMenu from '@atoms/icons/HamburgerMenu'

const Navbar = () => (
  <NavbarContainer>
    <NavbarTitle />
    <HamburgerMenu boxSize={21} marginTop="2px" />
  </NavbarContainer>
)

export default Navbar
