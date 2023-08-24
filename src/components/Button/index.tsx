import React from 'react'
import Link from 'next/link'
import { svgs } from './svgs'

type ButtonProps = {
  className?: string
  href?: string
  onClick?: () => void
  children: React.ReactNode
  px?: string
  white?: boolean
}

const Button = ({ className, href, onClick, children, px, white }: ButtonProps) => {
  const classes = `button relative inline-flex items-center justify-center h-11 ${px || 'px-7'} ${
    white ? 'text-n-8' : 'text-n-1'
  } transition-colors hover:text-color-1 ${className || ''}`

  const spanClasses = 'relative z-10'
  const isMail = href && href.startsWith('mailto:')

  if (isMail) {
    return (
      <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        {svgs(white)}
      </a>
    )
  }

  if (!href) {
    return (
      <button className={classes} onClick={onClick}>
        <span className={spanClasses}>{children}</span>
        {svgs(white)}
      </button>
    )
  }

  return (
    <Link href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {svgs(white)}
    </Link>
  )
}

export default Button
