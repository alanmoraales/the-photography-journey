import styled from '@emotion/styled'
import Head from 'components/atoms/Head'
import { Heading, Body } from 'components/atoms/Typography'

const Container = styled.div`
  padding: 25px;
  max-width: 75ch;
  margin: 0 auto;
`

const Header = styled.div`
  padding-top: 64px;
  gap: 8px;
  display: grid;
`

const Meta = styled.div`
  display: flex;
  gap: 9px;
`

const Content = styled.div`
  padding-top: 32px;
`

const Home = () => (
  <div>
    <Head />
    <main>
      <Container>
        <Header>
          <Heading>Starting The Journey</Heading>
          <Meta>
            <Body color="primary">Post</Body>
            <Body color="opaque" weight="light">
              •
            </Body>
            <Body color="opaque" weight="light">
              June 25, 2021
            </Body>
          </Meta>
        </Header>
        <Content>
          <Body variant="blogParagraph">
            The idea of the two halves of life was popularized by Carl Jung, a
            psychologist, also known as founder of the school of analytical
            psychology. It says that a human life, like a day, has its morning
            and its evening, each one with its tasks and goals.{' '}
          </Body>
        </Content>
      </Container>
    </main>
  </div>
)

export default Home
