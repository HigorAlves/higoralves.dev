import Button from '~/components/Button'
import Generating from '~/components/Generating'
import Heading from '~/components/Heading'
import Image from '~/components/Image'
import Section from '~/components/Section'

type HeroProps = {}

const Hero = ({}: HeroProps) => (
  <Section>
    <div className="container md:pt-10 lg:pt-16 xl:pt-20">
      <Heading
        className="md:mb-15"
        textAlignClassName="text-center"
        titleLarge="Roadmap"
        textLarge="This document provides a comprehensive guide to developing a chat AI app, including its key features and development steps."
      >
        <Button className="mt-8 md:mt-12" href="mailto:info@ui8.net" white>
          Suggest features
        </Button>
      </Heading>
      <div className="relative mx-auto max-w-5xl">
        <div className="relative z-1 rounded-2xl bg-conic-gradient p-0.5">
          <div className="relative rounded-[0.875rem] bg-n-8">
            <div className="h-[1.375rem] rounded-t-[0.875rem] bg-[#43435C]"></div>
            <div className="relative h-[30.625rem] overflow-hidden rounded-b-[0.875rem]">
              <Image
                className="absolute left-1/2 top-1/2 max-w-none -translate-x-[51%] -translate-y-[58%]"
                src="/images/roadmap/hero.png"
                width={654}
                height={932}
                alt="Hero"
              />
            </div>
            <div className="pointer-events-none absolute -top-20 left-[14%] hidden md:block">
              <Image className="w-full" src="/images/roadmap/coins.png" width={76} height={190} alt="Coins" />
            </div>
            <Generating className="absolute bottom-5 left-4 right-4 border border-n-1/10 md:bottom-8 md:left-1/2 md:right-auto md:w-[30.5rem] md:-translate-x-1/2" />
          </div>
        </div>
        <div className="relative z-1 mx-2.5 h-6 rounded-b-[1.25rem] bg-[#1B1B2E] shadow-xl lg:mx-8 lg:h-6"></div>
        <div className="relative z-1 mx-6 h-6 rounded-b-[1.25rem] bg-[#1B1B2E]/70 shadow-xl lg:mx-20 lg:h-6"></div>
      </div>
    </div>
  </Section>
)

export default Hero
