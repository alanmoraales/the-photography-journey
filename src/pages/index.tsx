import styled from '@emotion/styled'
import Head from 'components/atoms/Head'
import { Heading } from 'components/atoms/Typography'

const Container = styled.div`
  padding: 25px;
`

const Home = () => (
  <div>
    <Head />
    <main>
      <Container>
        <Heading>Starting The Journey</Heading>
      </Container>
    </main>
  </div>
)

export default Home
