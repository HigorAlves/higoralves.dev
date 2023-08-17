import { useEffect, useRef, useState } from 'react'
import { ScrollParallax } from 'react-just-parallax'
import Button from '~/components/Button'
import Generating from '~/components/Generating'
import Image from '~/components/Image'
import Notification from '~/components/Notification'
import Section from '~/components/Section'
import Logos from '~/components/Logos'

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
            Get started
          </Button>
        </div>
        <div className="relative mx-auto max-w-[23.25rem] md:max-w-5xl xl:mb-24">
          <div className="relative z-1 rounded-2xl bg-conic-gradient p-0.5">
            <div className="relative rounded-[0.875rem] bg-n-8">
              <div className="h-[1.375rem] rounded-t-[0.875rem] bg-[#43435C]"></div>
              <div className="aspect-[33/40] overflow-hidden rounded-b-[0.875rem] md:aspect-[688/490] lg:aspect-[1024/490]">
                <Image
                  className="w-full translate-y-[8%] scale-[1.7] md:-translate-y-[10.5%] md:scale-[1] lg:-translate-y-[23.5%]"
                  src="/images/hero/robot.jpg"
                  width={1024}
                  height={490}
                  alt="AI"
                />
              </div>
              <Generating className="absolute bottom-5 left-4 right-4 md:bottom-8 md:left-1/2 md:right-auto md:w-[30.5rem] md:-translate-x-1/2" />
              <ScrollParallax isAbsolutelyPositioned>
                <ul className="absolute -left-[5.5rem] bottom-[7.625rem] hidden rounded-2xl border border-n-1/10 bg-[#474060]/40 px-1 py-1 backdrop-blur xl:flex">
                  {[
                    '/images/icons/home-smile.svg',
                    '/images/icons/file-02.svg',
                    '/images/icons/search-md.svg',
                    '/images/icons/plus-square.svg',
                  ].map((icon, index) => (
                    <li className="p-5" key={index}>
                      <Image src={icon} width={24} height={25} alt={icon} />
                    </li>
                  ))}
                </ul>
              </ScrollParallax>
              <ScrollParallax isAbsolutelyPositioned>
                <Notification
                  className="absolute -right-[5.5rem] bottom-[11.25rem] hidden w-[18.375rem] xl:flex"
                  title="Code generation"
                />
              </ScrollParallax>
            </div>
          </div>
          <div className="relative z-1 mx-2.5 h-6 rounded-b-[1.25rem] bg-[#1B1B2E] shadow-xl lg:mx-8 lg:h-6"></div>
          <div className="relative z-1 mx-6 h-6 rounded-b-[1.25rem] bg-[#1B1B2E]/70 shadow-xl lg:mx-20 lg:h-6"></div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <Image
              className="w-full"
              src="/images/hero/background.jpg"
              width={1440}
              height={1800}
              quality={100}
              alt="Hero"
            />
          </div>
          <div className="absolute -top-[42.375rem] left-1/2 aspect-square w-[78rem] -translate-x-1/2 rounded-full border border-n-2/5 md:-top-[38.5rem] xl:-top-[32rem]">
            <div className="absolute left-1/2 top-1/2 aspect-square w-[65.875rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10"></div>
            <div className="absolute left-1/2 top-1/2 aspect-square w-[51.375rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10"></div>
            <div className="absolute left-1/2 top-1/2 aspect-square w-[36.125rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10"></div>
            <div className="absolute left-1/2 top-1/2 aspect-square w-[23.125rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10"></div>
            {/* <MouseParallax
                            strength={0.07}
                            parallaxContainerRef={parallaxRef}
                        > */}
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
            {/* </MouseParallax> */}
          </div>
        </div>
        <Logos className="relative z-10 mt-20 hidden lg:block" />
      </div>
      <div className="pointer-events-none absolute left-10 right-10 top-[55.25rem] hidden h-0.25 bg-n-6 xl:block"></div>
      <svg
        className="pointer-events-none absolute left-[2.1875rem] top-[54.9375rem] z-2 hidden xl:block"
        width="11"
        height="11"
        fill="none"
      >
        <path
          d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
          fill="#ada8c4"
        />
      </svg>
      <svg
        className="pointer-events-none absolute right-[2.1875rem] top-[54.9375rem] z-2 hidden xl:block"
        width="11"
        height="11"
        fill="none"
      >
        <path
          d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
          fill="#ada8c4"
        />
      </svg>
    </Section>
  )
}

export default Hero
