import Image from 'next/image'
import Link from 'next/link'
import { styles } from './Logo.styles'

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  const { base } = styles()

  return (
    <Link className={base()} href="/">
      <Image src="/images/logo.svg" width={40} height={40} priority={true} alt="Higor Alves Logo" />
    </Link>
  )
}
