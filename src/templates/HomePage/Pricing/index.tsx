import Link from 'next/link'
import Heading from '~/components/Heading'
import Image from '~/components/Image'
import PricingList from '~/components/PricingList'
import Section from '~/components/Section'

type PricingProps = {}

const Pricing = ({}: PricingProps) => {
  return (
    <Section className="overflow-hidden">
      <div className="container relative z-2">
        <div className="relative mb-[6.5rem] hidden justify-center lg:flex">
          <Image className="relative z-1" src="/images/figures/4-small.png" width={255} height={255} alt="Sphere" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 w-[59.5rem] -translate-x-1/2 -translate-y-1/2">
            <Image className="w-full" src="/images/pricing/stars.svg" width={952} height={396} alt="Stars" />
          </div>
        </div>
        <Heading tag="Get started with Brainwave" title="Pay once, use forever" />
        <div className="relative">
          <PricingList />
          <div className="pointer-events-none absolute right-full top-1/2 hidden h-[11.0625rem] w-[92.5rem] -translate-y-1/2 lg:block">
            <Image className="w-full" src="/images/pricing/lines.svg" width={1480} height={177} alt="Lines" />
          </div>
          <div className="pointer-events-none absolute left-full top-1/2 hidden h-[11.0625rem] w-[92.5rem] -translate-y-1/2 -scale-x-100 lg:block">
            <Image className="w-full" src="/images/pricing/lines.svg" width={1480} height={177} alt="Lines" />
          </div>
        </div>
        <div className="mt-8 flex justify-center md:mt-15 xl:mt-20">
          <Link
            className="border-b border-n-1 font-code text-xs font-bold uppercase tracking-wider transition-colors hover:border-n-1/0"
            href="/pricing"
          >
            See the full details
          </Link>
        </div>
      </div>
    </Section>
  )
}

export default Pricing
