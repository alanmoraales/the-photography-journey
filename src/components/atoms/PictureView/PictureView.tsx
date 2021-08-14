import { useState, useRef } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import type { IImage } from '@declarations/image'

const PictureView = ({
  smallJpg,
  smallWebp,
  top,
  left,
  width,
  height,
  css,
}: IImage) => {
  const imageRef = useRef<HTMLImageElement>(undefined)
  const [imageIsVisible, setImageIsVisible] = useState(false)
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  const onImageLoaded = () => setImageIsLoaded(true)

  const onImageVisibilityChange = (isVisible: boolean) =>
    setImageIsVisible(isVisible)

  return (
    <VisibilitySensor
      onChange={onImageVisibilityChange}
      partialVisibility
      resizeCheck
      offset={{
        top: -800,
        bottom: -800,
      }}
    >
      <div
        key={smallJpg}
        style={{
          position: 'absolute',
          top,
          left,
          width,
          height,
        }}
      >
        <div
          style={{
            display: 'block',
            position: 'relative',
            width,
            height,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width,
              height,
              transform: 'scale(1.3)',
              filter: 'blur(30px)',
              ...css,
            }}
          />
          <picture>
            <source srcSet={smallWebp} />
            <img
              loading="lazy"
              onLoad={onImageLoaded}
              alt={smallJpg}
              src={smallJpg}
              width={width}
              height={height}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: imageIsVisible && imageIsLoaded ? 1 : 0,
                transition: 'opacity 0.2s',
              }}
            />
          </picture>
        </div>
      </div>
    </VisibilitySensor>
  )
}

export default PictureView
