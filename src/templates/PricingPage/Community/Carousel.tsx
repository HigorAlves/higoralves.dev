import { useRef, useState } from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import Comment from './Comment'

type CarouselProps = {
  items: any
}

const Carousel = ({ items }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const ref = useRef<any>(null)

  const handleClick = (index: number) => {
    setActiveIndex(index)
    ref.current?.go(index)
  }

  return (
    <Splide
      className="splide-visible relative z-2"
      options={{
        pagination: false,
        arrows: false,
        gap: '1.5rem',
      }}
      onMoved={(e, newIndex) => setActiveIndex(newIndex)}
      hasTrack={false}
      ref={ref}
    >
      <SplideTrack>
        {items.map((item: any) => (
          <SplideSlide key={item.id}>
            <div className="flex h-full">
              <Comment comment={item} />
            </div>
          </SplideSlide>
        ))}
      </SplideTrack>
      <div className="-mx-2 mt-8 flex justify-center md:mt-15 lg:hidden">
        {items.map((item: any, index: number) => (
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

export default Carousel
