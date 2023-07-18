import Link from 'next/link'

import { navigation } from '~/constants/navigation'
import { socials } from '~/constants/socials'
import Image from '../Image'
import Logo from '../Logo'
import Section from '../Section'

type FooterProps = {}

const Footer = ({}: FooterProps) => (
  <Section className="px-5 pb-6 pt-11 lg:px-7.5 lg:pb-12 lg:pt-[6.5rem] xl:px-10" crosses customPaddings>
    <div className="mb-6 flex h-[6.5rem] items-center justify-center border-b border-n-6 lg:justify-start">
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

export default Footer
