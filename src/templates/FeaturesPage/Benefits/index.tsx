import { useRef, useState } from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
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
        <Splide
          className="splide-benefits splide-visible max-w-[16rem] md:max-w-none"
          options={{
            mediaQuery: 'min',
            pagination: false,
            arrows: false,
            gap: '1.5rem',
            breakpoints: {
              768: {
                destroy: true,
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
                <div className="mb-6 flex items-center">
                  <Image src={item.iconUrl} width={48} height={48} alt={item.title} />
                </div>
                <h5 className="h6 mb-4">{item.title}</h5>
                <p className="body-2 text-n-3">{item.text}</p>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
        <div className="-mx-2 mt-12 flex md:hidden">
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
      </div>
    </Section>
  )
}

export default Benefits
