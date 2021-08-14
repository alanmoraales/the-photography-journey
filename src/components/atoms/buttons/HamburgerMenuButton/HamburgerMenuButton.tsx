import IconButton from '@atoms/buttons/IconButton'
import HamburgerMenu from '@atoms/icons/HamburgerMenu'

interface IHamburgerMenuButton {
  onClick?: () => void
}

const HamburgerMenuButton = ({ onClick }: IHamburgerMenuButton) => (
  <IconButton
    ariaLabel="Open navigation"
    icon={HamburgerMenu}
    onClick={onClick}
  />
)

export default HamburgerMenuButton
