import Head from 'components/atoms/Head'
import { Heading } from '@chakra-ui/react'
import BrandLogo from 'components/atoms/icons/BrandLogo'

const Home = () => (
  <div>
    <Head />
    <main>
      <BrandLogo boxSize={40} />
      <Heading>The Photography Journey</Heading>
    </main>
  </div>
)

export default Home
