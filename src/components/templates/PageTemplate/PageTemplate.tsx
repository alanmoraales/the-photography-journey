import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from '@organisms/Navbar'

const PageTemplate: FC = ({ children }) => (
  <Box pt={8} pb={8}>
    <Navbar />
    {children}
  </Box>
)

export default PageTemplate
