import Link from 'next/link'
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

const { home, posts, gallery } = routes

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()

  return (
    <>
      <NavbarContainer>
        <Link href={home} passHref>
          <a>
            <NavbarTitle />
          </a>
        </Link>
        <HamburgerMenuButton onClick={onToggle} />
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
              <NavbarLink href={home}>Home</NavbarLink>
              <NavbarLink href={posts}>Posts</NavbarLink>
              <NavbarLink href={gallery}>Gallery</NavbarLink>
            </Grid>
          </Grid>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Navbar
