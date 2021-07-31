import { FC } from 'react'
import { Grid } from '@chakra-ui/react'
import Flex from 'components/atoms/Flex'

const NavbarContainer: FC = ({ children }) => (
  <Grid placeItems="center" p={6}>
    <Flex
      justifyContent="space-between"
      gap="64px"
      maxWidth="1000px"
      width="100%"
    >
      {children}
    </Flex>
  </Grid>
)

export { NavbarContainer }
