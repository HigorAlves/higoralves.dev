import React from 'react'

import Image, { ImageLoaderProps, ImageProps } from 'next/image'

const contentfulLoader = ({ src, width, quality = 75 }: ImageLoaderProps) => {
	return `${src}?w=${width}&q=${quality}&fm=webp`
}

export function ContentfulImage(props: ImageProps) {
	return <Image alt={props.alt} loader={contentfulLoader} {...props} />
}
