import Image from '~/components/Image'

type LogosProps = {
  className?: string
}

export function Logos({ className }: LogosProps) {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">Helping people & companies create beautiful platforms at</h5>
      <ul className="flex">
        <li className="flex h-[8.5rem] flex-1 items-center justify-center">
          <Image src="/images/companies/feature/xteam.svg" width={134} height={28} alt="X-Team logo" />
        </li>
        <li className="flex h-[8.5rem] flex-1 items-center justify-center">
          <Image src="/images/companies/feature/ask.svg" width={134} height={28} alt="Ask Media Group" />
        </li>
        <li className="flex h-[8.5rem] flex-1 items-center justify-center">
          <Image src="/images/companies/feature/bubbles.svg" width={134} height={28} alt="Bubbles" />
        </li>
        <li className="flex h-[8.5rem] flex-1 items-center justify-center">
          <Image src="/images/companies/feature/tiled.svg" width={134} height={28} alt="Tiled" />
        </li>
        <li className="flex h-[8.5rem] flex-1 items-center justify-center">
          <Image src="/images/companies/feature/unesco.svg" width={134} height={28} alt="Unesco" />
        </li>
      </ul>
    </div>
  )
}
