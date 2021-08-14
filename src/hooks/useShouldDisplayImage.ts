import { useState } from 'react'

const useShouldDisplayImage = () => {
  const [imageIsVisible, setImageIsVisible] = useState(false)
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  const onImageLoaded = () => setImageIsLoaded(true)

  const onImageVisibilityChange = (isVisible: boolean) =>
    setImageIsVisible(isVisible)

  return {
    shouldDisplayImage: imageIsVisible && imageIsLoaded,
    onImageLoaded,
    onImageVisibilityChange,
  }
}

export default useShouldDisplayImage
