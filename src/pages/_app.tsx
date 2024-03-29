import { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { light } from 'themes'
import mixpanelService from 'mixpanel'
import 'flickity/css/flickity.css'

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    mixpanelService.init()
  }, [])

  return (
    <ChakraProvider theme={light}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
