import Image from '~/components/Image'

type LogosProps = {
  className?: string
}

const Logos = ({ className }: LogosProps) => (
  <div className={className}>
    <h5 className="tagline mb-6 text-center text-n-1/50">Helping people create beautiful content at</h5>
    <ul className="flex">
      <li className="flex h-[8.5rem] flex-1 items-center justify-center">
        <Image src="/images/yourlogo.svg" width={134} height={28} alt="Logo 3" />
      </li>
      <li className="flex h-[8.5rem] flex-1 items-center justify-center">
        <Image src="/images/yourlogo.svg" width={134} height={28} alt="Logo 3" />
      </li>
      <li className="flex h-[8.5rem] flex-1 items-center justify-center">
        <Image src="/images/yourlogo.svg" width={134} height={28} alt="Logo 3" />
      </li>
      <li className="flex h-[8.5rem] flex-1 items-center justify-center">
        <Image src="/images/yourlogo.svg" width={134} height={28} alt="Logo 3" />
      </li>
      <li className="flex h-[8.5rem] flex-1 items-center justify-center">
        <Image src="/images/yourlogo.svg" width={134} height={28} alt="Logo 3" />
      </li>
    </ul>
  </div>
)

export default Logos
