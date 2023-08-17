import { useState } from 'react'
import Heading from '~/components/Heading'
import PricingList from '~/components/PricingList'
import Section from '~/components/Section'
import Logos from '~/components/Logos'

type PricingProps = {}

const Pricing = ({}: PricingProps) => {
  const [monthly, setMonthly] = useState<boolean>(false)

  return (
    <Section className="overflow-hidden">
      <div className="container relative z-2 md:pt-10 lg:pt-16 xl:pt-20">
        <Heading
          textAlignClassName="text-center"
          titleLarge="Pay once, use forever"
          textLarge="Get started with Brainwave - AI chat app today and experience the power of AI in your conversations!"
        />
        <div className="mx-auto mb-10 w-[19rem] rounded-xl bg-gradient-to-b from-[#D77DEE]/90 to-n-1/15 p-0.25">
          <div className="flex rounded-[0.6875rem] bg-n-8 p-[0.1875rem]">
            <button
              className={`button h-10 flex-1 rounded-lg transition-colors ${monthly ? 'bg-n-6' : ''}`}
              onClick={() => setMonthly(true)}
            >
              monthly
            </button>
            <button
              className={`button h-10 flex-1 rounded-lg transition-colors ${monthly ? '' : 'bg-n-6'}`}
              onClick={() => setMonthly(false)}
            >
              annually
              <span className="ml-2.5 rounded bg-color-1 p-1">-10%</span>
            </button>
          </div>
        </div>
        <PricingList monthly={monthly} />
        <Logos className="mt-20 hidden lg:block" />
      </div>
    </Section>
  )
}

export default Pricing
