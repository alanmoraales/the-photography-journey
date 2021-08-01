import styled from '@emotion/styled'

interface IPortview {
  imageURL: string
  width: number
  height: number
  top: number
  left: number
}

const Portview = styled.div<IPortview>`
  ${(props) => `
    background-image: url(${props.imageURL});
    background-size: cover;
    height: ${props.height}px;
    position: absolute;
    transform: translate(${props.left}px, ${props.top}px);
    width: ${props.width}px;
  `}
`

export default Portview
