import { screen, render } from '@testing-library/react'
import { Heading } from '.'

describe('Heading component', () => {
  it('should display as h1 without props', () => {
    const text = 'rendered inside h1 tag'
    render(<Heading>{text}</Heading>)
    const element = screen.getByText(text)
    expect(element.tagName).toEqual('H1')
  })
})
