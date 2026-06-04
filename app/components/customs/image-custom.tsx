import React, { useEffect, useRef, useState } from 'react'

import clsx from 'clsx'
import { FallbackImage } from '~/assets/images'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string
}

const ImageCustom = ({ src, className, fallbackSrc = FallbackImage, ...props }: ImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null)

  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const img = imgRef.current

    if (img?.complete && img.naturalWidth !== 0) {
      setIsLoaded(true)
    }
  }, [])

  return (
    <div className='relative overflow-hidden'>
      {!isLoaded && !hasError && (
        <div className={clsx('absolute inset-0 animate-pulse bg-gray-200 rounded', className)} />
      )}

      {!hasError && (
        <img
          ref={imgRef}
          src={src}
          className={clsx(className, 'transition-opacity duration-300', isLoaded ? 'opacity-100' : 'opacity-0')}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true)
            setIsLoaded(true)
          }}
          {...props}
        />
      )}

      {hasError && <img src={fallbackSrc} className={clsx('object-cover', className)} alt='fallback' />}
    </div>
  )
}

export default ImageCustom
