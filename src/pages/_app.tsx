import { ChakraProvider } from '@chakra-ui/react'
import { light } from 'themes'

const App = ({ Component, pageProps }) => (
  <ChakraProvider theme={light}>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default App
