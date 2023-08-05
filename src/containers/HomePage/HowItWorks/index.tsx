import { useRef, useState } from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import Arrows from '~/components/Arrows'
import Button from '~/components/Button'
import Image from '~/components/Image'
import Section from '~/components/Section'
import Tagline from '~/components/Tagline'

import { howItWorks } from '~/mocks/how-it-works'

type HowItWorksProps = {}

const HowItWorks = ({}: HowItWorksProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const ref = useRef<any>(null)

  const handleClick = (index: number) => {
    setActiveIndex(index)
    ref.current?.go(index)
  }

  return (
    <Section className="lg:-mb-16" crosses>
      <div className="container">
        <Splide
          className="splide-custom"
          options={{
            type: 'fade',
            rewind: true,
            pagination: false,
          }}
          hasTrack={false}
          ref={ref}
        >
          <SplideTrack>
            {howItWorks.map((item, index) => (
              <SplideSlide key={item.id}>
                <div className="lg:flex lg:flex-row-reverse lg:items-center">
                  <div className="">
                    <Tagline className="mb-4 lg:mb-6">How it work: 0{index + 1}.</Tagline>
                    <h2 className="h2 mb-4 lg:mb-6">{item.title}</h2>
                    <p className="body-2 mb-10 text-n-3">{item.text}</p>
                    <Button href="/login">Join me for a ride</Button>
                    <Arrows
                      className="my-10 lg:hidden"
                      prevClassName="mr-3"
                      onPrev={() => ref.current?.go('<')}
                      onNext={() => ref.current?.go('>')}
                    />
                  </div>
                  <div className="relative lg:mr-[7.125rem] lg:w-[29.375rem] lg:flex-shrink-0 xl:mr-40 xl:w-[34.375rem]">
                    <div className="overflow-hidden rounded-3xl bg-gradient-to-tl from-n-1/0 via-n-1/0 to-n-1/15 pl-0.25 pt-0.25">
                      <div className="h-[30.5rem] rounded-[1.4375rem] bg-n-7 xl:h-[35.625rem]">
                        <Image
                          className="h-full w-full object-contain"
                          src={item.image}
                          width={550}
                          height={570}
                          alt={item.title}
                        />
                        <div className="absolute bottom-4 left-4 right-4 flex h-16 items-center rounded-xl border border-n-1/10 bg-n-8 px-5 lg:bottom-6 lg:left-6 lg:right-6">
                          <div className="mr-5 flex h-6 w-6 items-center justify-center rounded-full bg-color-1">
                            <svg className="h-2.5 w-2.5 fill-n-1" viewBox="0 0 10 10">
                              <path d="M5 0a1 1 0 0 1 .993.883L6 1v3h3a1 1 0 0 1 .117 1.993L9 6H6v3a1 1 0 0 1-1.993.117L4 9V6H1a1 1 0 0 1-.117-1.993L1 4h3V1a1 1 0 0 1 1-1z" />
                            </svg>
                          </div>
                          <div className="text-base text-n-3/75">Ask anything</div>
                          <div className="ml-auto h-6 w-6 opacity-50">
                            <Image
                              className="w-full"
                              src="/images/icons/recording-01.svg"
                              width={24}
                              height={24}
                              alt="Recording"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -right-6 bottom-8 top-8 w-6 rounded-r-3xl bg-[#1B1B2E]"></div>
                    <div className="absolute -right-12 bottom-16 top-16 w-6 rounded-r-3xl bg-[#1B1B2E]/50"></div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
          <Arrows
            className="mt-12 hidden justify-center lg:mt-15 lg:flex xl:hidden"
            prevClassName="mr-3"
            onPrev={() => ref.current?.go('<')}
            onNext={() => ref.current?.go('>')}
          />
          <div className="pointer-events-none absolute -left-[10rem] top-0 h-[29.5rem] w-[29.5rem] opacity-20 mix-blend-color-dodge">
            <Image
              className="absolute left-1/2 top-1/2 h-[61.5rem] w-[55.5rem] max-w-[55.5rem] -translate-x-1/2 -translate-y-1/2"
              src="/images/how-it-works/gradient.png"
              width={984}
              height={984}
              alt="Gradient"
            />
          </div>
          <div className="mt-20 hidden grid-cols-4 gap-6 xl:grid">
            {howItWorks.map((item, index) => (
              <div className="group cursor-pointer" onClick={() => handleClick(index)} key={item.id}>
                <div
                  className={`mb-10 h-[0.125rem] transition-colors ${
                    index === activeIndex ? 'bg-color-1' : 'bg-[#D9D9D9]/10 group-hover:bg-[#D9D9D9]/50'
                  }`}
                ></div>
                <div className="tagline mb-1 text-n-3">0{index + 1}.</div>
                <h2 className="mb-[0.625rem] text-2xl leading-8">{item.title}</h2>
                <p
                  className={`body-2 line-clamp-3 text-n-3 transition-opacity ${index !== activeIndex && 'opacity-0'}`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Splide>
      </div>
    </Section>
  )
}

export default HowItWorks
