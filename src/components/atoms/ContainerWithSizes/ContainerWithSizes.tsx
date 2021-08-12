import React, { useEffect, FunctionComponent } from 'react'
import { withSize } from 'react-sizeme'

interface ISizes {
  width: number
  height: number
}

interface IContainerProps {
  size: ISizes
  onSizeChange: (size: ISizes) => void
}

const Container: FunctionComponent<IContainerProps> = ({
  size,
  onSizeChange,
  children,
}) => {
  useEffect(() => {
    onSizeChange(size)
  }, [size])

  return <div>{children}</div>
}

const ContainerWithSizes = withSize()(Container)

export type { ISizes }
export default ContainerWithSizes
