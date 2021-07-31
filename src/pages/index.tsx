import styled from '@emotion/styled'
import Head from 'components/atoms/Head'
import Link from 'components/atoms/Link'

const Main = styled.main`
  padding-top: 64px;
`

const Home = () => (
  <>
    <Head />
    <Main>
      <Link href="/posts/starting-the-journey">Starting The Journey</Link>
    </Main>
  </>
)

export default Home
