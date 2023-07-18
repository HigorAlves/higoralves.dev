import { useRef, useState } from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import Button from '~/components/Button'
import Image from '~/components/Image'
import { pricing } from '~/mocks/pricing'

type PricingListProps = {
  monthly?: boolean
}

const PricingList = ({ monthly = true }: PricingListProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const ref = useRef<any>(null)

  const handleClick = (index: number) => {
    setActiveIndex(index)
    ref.current?.go(index)
  }

  return (
    <Splide
      className="splide-pricing splide-visible"
      options={{
        mediaQuery: 'min',
        autoWidth: true,
        pagination: false,
        arrows: false,
        gap: '1rem',
        breakpoints: {
          1024: {
            destroy: true,
          },
        },
      }}
      onMoved={(e, newIndex) => setActiveIndex(newIndex)}
      hasTrack={false}
      ref={ref}
    >
      <SplideTrack>
        {pricing.map((item, index) => (
          <SplideSlide className={`${index === 1 ? '' : 'py-3'}`} key={item.id}>
            <div
              className={`h-full w-[19rem] px-6 ${
                index === 1 ? 'py-12' : 'py-8'
              } rounded-[2rem] border border-n-6 bg-n-8 lg:w-auto`}
              key={item.id}
            >
              <h4
                className={`h4 mb-4 ${index === 0 ? 'text-color-2' : ''} ${index === 1 ? 'text-color-1' : ''} ${
                  index === 2 ? 'text-color-3' : ''
                }`}
              >
                {item.title}
              </h4>
              <p className="body-2 mb-3 min-h-[4rem] text-n-1/50">{item.description}</p>
              <div className="mb-6 flex h-[5.5rem] items-center">
                {item.price && (
                  <>
                    <div className="h3">$</div>
                    <div className="text-[5.5rem] font-bold leading-none">
                      {monthly ? item.price : item.price !== '0' ? (+item.price * 12 * 0.9).toFixed(1) : item.price}
                    </div>
                  </>
                )}
              </div>
              <Button
                className="mb-6 w-full"
                href={item.price ? '/pricing' : 'mailto:info@ui8.net'}
                white={!!item.price}
              >
                {item.price ? 'Get started' : 'Contact us'}
              </Button>
              <ul>
                {item.features.map((feature, index) => (
                  <li className="flex items-start border-t border-n-6 py-5" key={index}>
                    <Image src="/images/check.svg" width={24} height={24} alt="Check" />
                    <p className="body-2 ml-4">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </SplideSlide>
        ))}
      </SplideTrack>
      <div className="-mx-2 mt-8 flex justify-center md:mt-15 lg:hidden">
        {pricing.map((item, index) => (
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
    </Splide>
  )
}

export default PricingList
