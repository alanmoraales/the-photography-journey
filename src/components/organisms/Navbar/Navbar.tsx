import {
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  Grid,
  Box,
} from '@chakra-ui/react'
import Flex from '@atoms/Flex'
import { NavbarContainer, NavbarTitle, NavbarLink } from '@atoms/Navbar'
import HamburgerMenuButton from '@atoms/buttons/HamburgerMenuButton'
import CloseButton from '@atoms/buttons/CloseButton'
import routes from '@constants/routes'

const { home, posts, gallery, prints } = routes

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()

  const navbarLinks = (
    <>
      <NavbarLink href={home}>Home</NavbarLink>
      <NavbarLink href={prints}>Prints</NavbarLink>
      <NavbarLink href={posts}>Blog</NavbarLink>
      <NavbarLink href={gallery}>Gallery</NavbarLink>
    </>
  )

  return (
    <>
      <NavbarContainer>
        <NavbarTitle />
        <Box display={{ base: 'block', lg: 'none' }}>
          <HamburgerMenuButton onClick={onToggle} />
        </Box>
        <Grid
          display={{ base: 'none', lg: 'grid' }}
          gap={8}
          width="fit-content"
          templateColumns="auto auto auto auto"
          placeItems="center"
        >
          {navbarLinks}
        </Grid>
      </NavbarContainer>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay background="rgba(29, 29, 29, 0.1)" />
        <DrawerContent
          background="rgba(255, 255, 255, 0.8)"
          sx={{
            backdropFilter: 'blur(15px)',
          }}
        >
          <Grid gap={16} p={8} pt={16}>
            <Flex justifyContent="space-between" alignItems="baseline" gap={8}>
              <NavbarTitle />
              <Box transform="translate(0, -7px)">
                <CloseButton onClick={onClose} />
              </Box>
            </Flex>
            <Grid gap={4} width="fit-content" pl={10}>
              {navbarLinks}
            </Grid>
          </Grid>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Navbar
