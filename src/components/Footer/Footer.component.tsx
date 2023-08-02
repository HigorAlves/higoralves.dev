import Link from 'next/link'

import { Logo } from '~/components'
import { styles } from '~/components/Footer/Footer.style'
import { navigation } from '~/constants/navigation'
import { socials } from '~/constants/socials'
import Image from '../Image'
import Section from '../Section'

export function Footer() {
  const { section, wrapper } = styles()

  return (
    <Section className={section()} crosses customPaddings>
      <div className={wrapper()}>
        <Logo />
        <nav className="ml-auto hidden items-center justify-center lg:flex">
          {navigation.slice(0, -1).map((item) => (
            <Link
              className={
                'px-12 py-8 font-code text-xs font-semibold uppercase leading-5 text-n-1/50 transition-colors hover:text-n-1'
              }
              href={item.url}
              key={item.id}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="caption hidden text-n-4 lg:block">© {new Date().getFullYear()} UI8</div>
        <div className="-mx-4 flex justify-center">
          {socials.map((item) => (
            <a
              className="mx-4 flex h-10 w-10 items-center justify-center rounded-full bg-n-7 transition-colors hover:bg-n-6"
              href={item.url}
              target="_blank"
              key={item.id}
              rel="noreferrer"
            >
              <Image src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}
