import { useEffect, useRef, useState } from 'react'
import Button from '~/components/Button'
import Image from '~/components/Image'
import Logos from '~/components/Logos'
import Section from '~/components/Section'

type HeroProps = {}

const Hero = ({}: HeroProps) => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const parallaxRef = useRef<any>(null)

  return (
    <Section
      className="-mt-[4.75rem] overflow-hidden pb-4 pt-[8.25rem] md:pb-[4.8rem] md:pt-[9.75rem] lg:-mb-40 lg:-mt-[5.25rem] lg:pb-[13.8rem] lg:pt-[12.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative mx-auto max-w-[23.25rem] md:max-w-5xl xl:mb-24">
          <div className="relative z-1 mx-auto mb-[3.875rem] max-w-[62rem] text-center md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6">
              Roaming Routes, Rolling Code the adventures of a
              <span className="relative inline-block px-2">
                developer
                <Image
                  className="absolute left-0 top-full w-full xl:-mt-2"
                  src="/images/curve.png"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
            <p className="body-1 mx-auto mb-6 max-w-3xl text-n-2 lg:mb-8">
              Delivering top-tier tech solutions, inspired by diverse cultures and fueled by a nomadic lifestyle.
            </p>
            <Button href="/pricing" white>
              Get Inspired
            </Button>
          </div>
          <div className="absolute -top-[64%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[180%]">
            <Image
              className="w-full"
              src="/images/hero/background.jpg"
              width={1440}
              height={1800}
              quality={100}
              alt="Hero"
            />
          </div>
          <div className="absolute -top-[42.375rem] left-1/2 aspect-square w-[78rem] -translate-x-1/2 rounded-full border border-n-2/5 md:-top-[38.5rem] xl:-top-[16rem]">
            <div className="absolute left-1/2 top-1/2 aspect-square w-[65.875rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10"></div>
            <div className="absolute left-1/2 top-1/2 aspect-square w-[51.375rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10"></div>
            <div className="absolute left-1/2 top-1/2 aspect-square w-[36.125rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10"></div>
            <div className="absolute left-1/2 top-1/2 aspect-square w-[23.125rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10"></div>
            <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom rotate-[46deg]">
              <div
                className={`-ml-1 -mt-36 h-2 w-2 rounded-full bg-gradient-to-b from-[#DD734F] to-[#1A1A32] transition-transform duration-500 ease-out ${
                  mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              ></div>
            </div>
            <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom -rotate-[56deg]">
              <div
                className={`-ml-1 -mt-32 h-4 w-4 rounded-full bg-gradient-to-b from-[#DD734F] to-[#1A1A32] transition-transform duration-500 ease-out ${
                  mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              ></div>
            </div>
            <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom rotate-[54deg]">
              <div
                className={`transit -ml-1 mt-[12.9rem] hidden h-4 w-4 rounded-full bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] transition-transform duration-500 ease-out xl:block ${
                  mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              ></div>
            </div>
            <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom -rotate-[65deg]">
              <div
                className={`-ml-1.5 mt-52 h-3 w-3 rounded-full bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] transition-transform duration-500 ease-out ${
                  mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              ></div>
            </div>
            <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom -rotate-[85deg]">
              <div
                className={`-ml-3 -mt-3 h-6 w-6 rounded-full bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] transition-transform duration-500 ease-out ${
                  mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              ></div>
            </div>
            <div className="absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom rotate-[70deg]">
              <div
                className={`-ml-3 -mt-3 h-6 w-6 rounded-full bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] transition-transform duration-500 ease-out ${
                  mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              ></div>
            </div>
          </div>
        </div>
        <Logos className="relative z-10 mt-20 hidden lg:block" />
      </div>
    </Section>
  )
}

export default Hero
