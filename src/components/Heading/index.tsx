import React from 'react'
import Tagline from '../Tagline'

type HeadingProps = {
  className?: string
  textAlignClassName?: string
  tagClassName?: string
  tag?: string
  titleLarge?: React.ReactNode
  title?: React.ReactNode
  textLarge?: React.ReactNode
  text?: React.ReactNode
  children?: React.ReactNode
}

const Heading = ({
  className,
  textAlignClassName,
  tagClassName,
  tag,
  titleLarge,
  title,
  textLarge,
  text,
  children,
}: HeadingProps) => (
  <div className={`mx-auto mb-12 max-w-[50rem] ${textAlignClassName || 'md:text-center'} lg:mb-20 ${className || ''}`}>
    {tag && <Tagline className={`mb-4 md:justify-center ${tagClassName || ''}`}>{tag}</Tagline>}
    {titleLarge && <h1 className="h1">{titleLarge}</h1>}
    {title && <h2 className="h2">{title}</h2>}
    {textLarge && <p className="h5 mt-6 text-n-4">{textLarge}</p>}
    {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    {children}
  </div>
)

export default Heading
