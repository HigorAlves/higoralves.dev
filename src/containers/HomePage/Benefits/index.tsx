import { useRef, useState } from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import Link from 'next/link'
import Heading from '~/components/Heading'
import Image from '~/components/Image'
import Section from '~/components/Section'

import { benefits } from '~/mocks/benefits'

type BenefitsProps = {}

const Benefits = ({}: BenefitsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const ref = useRef<any>(null)

  const handleClick = (index: number) => {
    setActiveIndex(index)
    ref.current?.go(index)
  }

  return (
    <Section className="overflow-hidden">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Having a hard time being a Nomad Dev?" />
        <Splide
          className="splide-visible max-w-[24rem] md:max-w-none"
          options={{
            mediaQuery: 'min',
            pagination: false,
            arrows: false,
            gap: '1.5rem',
            breakpoints: {
              768: {
                autoWidth: 'true',
              },
            },
          }}
          onMoved={(e, newIndex) => setActiveIndex(newIndex)}
          hasTrack={false}
          ref={ref}
        >
          <SplideTrack>
            {benefits.map((item) => (
              <SplideSlide key={item.id}>
                <Link
                  className="relative block bg-[length:100%_100%] bg-no-repeat p-0.5 md:max-w-[24rem]"
                  href="/features"
                  style={{
                    backgroundImage: `url(${item.backgroundUrl})`,
                  }}
                >
                  <div className="pointer-events-none relative z-2 flex h-[22.625rem] flex-col p-[2.375rem]">
                    <h5 className="h5 mb-5">{item.title}</h5>
                    <p className="body-2 mb-6 text-n-3">{item.text}</p>
                    <div className="mt-auto flex items-center">
                      <Image src={item.iconUrl} width={48} height={48} alt={item.title} />
                      <div className="ml-auto font-code text-xs font-bold uppercase tracking-wider text-n-1">
                        Explore more
                      </div>
                      <svg className="ml-5 fill-n-1" width="24" height="24">
                        <path d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414z" />
                      </svg>
                    </div>
                  </div>
                  {item.light && (
                    <div className="pointer-events-none absolute left-1/4 top-0 aspect-square w-full bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70%"></div>
                  )}
                  <div
                    className="absolute inset-0.5 bg-n-8"
                    style={{
                      clipPath: 'url(#benefits)',
                    }}
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                      {item.imageUrl && (
                        <Image
                          className="h-full w-full object-cover"
                          src={item.imageUrl}
                          width={380}
                          height={362}
                          alt={item.title}
                        />
                      )}
                    </div>
                  </div>
                </Link>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
        <div className="-mx-2 mt-12 flex md:mt-15 lg:justify-center xl:mt-20">
          {benefits.map((item, index) => (
            <button className="relative mx-2 h-6 w-6" onClick={() => handleClick(index)} key={item.id}>
              <span
                className={`absolute inset-0 rounded-full bg-conic-gradient transition-opacity ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
              ></span>
              <span className="absolute inset-0.25 rounded-full bg-n-8">
                <span className="absolute inset-2 rounded-full bg-n-1"></span>
              </span>
            </button>
          ))}
        </div>
        <svg className="block" width={0} height={0}>
          <clipPath id="benefits" clipPathUnits="objectBoundingBox">
            <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0" />
          </clipPath>
        </svg>
      </div>
    </Section>
  )
}

export default Benefits
