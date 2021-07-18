import styled from '@emotion/styled'
import Head from 'components/atoms/Head'
import { ArticleHeader } from 'components/molecules/Article'
import { Body } from 'components/atoms/Typography'
import { Image } from '@chakra-ui/react'

const Main = styled.main`
  padding-top: 64px;
`

const Container = styled.div`
  padding: 24px;
  max-width: 75ch;
  margin: 0 auto;
`

const Content = styled.div`
  padding-top: 32px;
`

const Home = () => (
  <>
    <Head />
    <Main>
      <ArticleHeader title="Starting The Journey" date="June 25, 2021" />
      <Container>
        <Content>
          <Image
            marginBottom="8"
            alt="Jarana yucateca"
            src="https://images.unsplash.com/photo-1606971220186-e18b2425247b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
          />
          <Body variant="blogParagraph">
            The idea of the two halves of life was popularized by Carl Jung, a
            psychologist, also known as founder of the school of analytical
            psychology. It says that a human life, like a day, has its morning
            and its evening, each one with its tasks and goals. The idea of the
            two halves of life was popularized by Carl Jung, a psychologist,
            also known as founder of the school of analytical psychology. It
            says that a human life, like a day, has its morning and its evening,
            each one with its tasks and goals. The idea of the two halves of
            life was popularized by Carl Jung, a psychologist, also known as
            founder of the school of analytical psychology. It says that a human
            life, like a day, has its morning and its evening, each one with its
            tasks and goals. The idea of the two halves of life was popularized
            by Carl Jung, a psychologist, also known as founder of the school of
            analytical psychology. It says that a human life, like a day, has
            its morning and its evening, each one with its tasks and goals.{' '}
          </Body>
          <Body variant="blogParagraph">
            The idea of the two halves of life was popularized by Carl Jung, a
            psychologist, also known as founder of the school of analytical
            psychology. It says that a human life, like a day, has its morning
            and its evening, each one with its tasks and goals. The idea of the
            two halves of life was popularized by Carl Jung, a psychologist,
            also known as founder of the school of analytical psychology. It
            says that a human life, like a day, has its morning and its evening,
            each one with its tasks and goals. The idea of the two halves of
            life was popularized by Carl Jung, a psychologist, also known as
            founder of the school of analytical psychology. It says that a human
            life, like a day, has its morning and its evening, each one with its
            tasks and goals. The idea of the two halves of life was popularized
            by Carl Jung, a psychologist, also known as founder of the school of
            analytical psychology. It says that a human life, like a day, has
            its morning and its evening, each one with its tasks and goals.{' '}
          </Body>
        </Content>
      </Container>
    </Main>
  </>
)

export default Home
