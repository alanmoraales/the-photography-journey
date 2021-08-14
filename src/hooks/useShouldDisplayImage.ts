import { useState } from 'react'

const useShouldDisplayImage = () => {
  const [imageIsVisible, setImageIsVisible] = useState(false)
  const [imageIsLoaded, setImageIsLoaded] = useState(false)
  const shouldDisplayImage = imageIsVisible && imageIsLoaded

  const onImageLoaded = () => setImageIsLoaded(true)

  const onImageVisibilityChange = (isVisible: boolean) =>
    setImageIsVisible(isVisible)

  return {
    shouldDisplayImage,
    onImageLoaded,
    onImageVisibilityChange,
  }
}

export default useShouldDisplayImage
