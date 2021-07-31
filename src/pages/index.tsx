import styled from '@emotion/styled'
import Head from 'components/atoms/Head'
import Link from 'components/atoms/Link'
import Navbar from 'components/organisms/Navbar'

const Main = styled.main`
  padding-top: 64px;
`

const Home = () => (
  <>
    <Head />
    <Navbar />
    <Main>
      <Link href="/posts/starting-the-journey">Starting The Journey</Link>
    </Main>
  </>
)

export default Home
