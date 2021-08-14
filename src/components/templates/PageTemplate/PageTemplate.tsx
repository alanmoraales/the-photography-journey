import { FC } from 'react'
import { Box, Grid } from '@chakra-ui/react'
import Navbar from '@organisms/Navbar'

const PageTemplate: FC = ({ children }) => (
  <Box pt={8} pb={8}>
    <Navbar />
    <Grid p={6} pt={8} placeItems="center">
      <Grid
        as="main"
        gap={16}
        placeItems="center"
        maxWidth="container.lg"
        width="100%"
      >
        {children}
      </Grid>
    </Grid>
  </Box>
)

export default PageTemplate
