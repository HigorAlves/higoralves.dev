import { useState } from 'react'
// eslint-disable-next-line import/no-named-default
import { ImageProps, default as NextImage } from 'next/image'

const Image = ({ className, ...props }: ImageProps) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <NextImage
      className={`inline-block align-top opacity-0 transition-opacity ${loaded && 'opacity-100'} ${className}`}
      onLoadingComplete={() => setLoaded(true)}
      {...props}
    />
  )
}

export default Image
