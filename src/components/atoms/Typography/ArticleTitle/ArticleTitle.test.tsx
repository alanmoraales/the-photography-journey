import { render, screen } from '@testing-library/react'
import ArticleTitle from '.'

describe('ArticleTitle component', () => {
  it('should display a given text', () => {
    const text = 'article title'
    render(<ArticleTitle>{text}</ArticleTitle>)
    const title = screen.getByText(text)
    expect(title).toBeInTheDocument()
  })
})
