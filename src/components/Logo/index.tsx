import Image from 'next/image'
import Link from 'next/link'

type LogoProps = {
  className?: string
}

const Logo = ({ className }: LogoProps) => (
  <Link className={`block w-[11.875rem] ${className || ''}`} href="/">
    <Image src="/images/brainwave.svg" width={190} height={40} priority={true} alt="Brainwave" />
  </Link>
)

export default Logo
