import { ChakraProvider } from '@chakra-ui/react'
import { lightTheme } from 'theme'

const App = ({ Component, pageProps }) => (
  <ChakraProvider theme={lightTheme}>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default App
