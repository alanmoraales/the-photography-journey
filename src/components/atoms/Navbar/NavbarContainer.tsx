import { FC } from 'react'
import { Grid } from '@chakra-ui/react'
import Flex from '@atoms/Flex'

const NavbarContainer: FC = ({ children }) => (
  <Grid
    placeItems="center"
    p={6}
    position="sticky"
    top={0}
    backgroundColor="background"
    zIndex={1}
  >
    <Flex
      justifyContent="space-between"
      gap={16}
      maxWidth="container.lg"
      width="100%"
      alignItems="baseline"
    >
      {children}
    </Flex>
  </Grid>
)

export { NavbarContainer }
