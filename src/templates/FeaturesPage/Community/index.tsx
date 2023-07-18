import { useRef, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from '~/components/Image'
import Section from '~/components/Section'

import { community } from '~/mocks/community'

type CommunityProps = {}

const Community = ({}: CommunityProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const ref = useRef<any>(null)

  const handleClick = (index: number) => {
    setActiveIndex(index)
    ref.current?.go(index)
  }

  return (
    <Section className="">
      <div className="container">
        <div className="relative rounded-3xl bg-gradient-to-b from-color-2/80 from-[4.5rem] via-color-1/40 via-[9rem] to-n-1/15 p-0.5">
          <div className="mb:pb-16 rounded-[1.375rem] bg-n-8 px-5 py-10 pt-20 md:px-20 md:pt-20 lg:py-28 lg:pr-48">
            <Splide
              options={{
                type: 'fade',
                pagination: false,
                arrows: false,
              }}
              onMoved={(e, newIndex) => setActiveIndex(newIndex)}
              ref={ref}
            >
              {community.map((comment) => (
                <SplideSlide className="flex" key={comment.id}>
                  <div className="flex flex-col lg:flex-row lg:items-start">
                    <div className="quote mb-6 md:mb-12 lg:mb-0 lg:text-[1.75rem] lg:leading-[2.25rem]">
                      {comment.text}
                    </div>
                    <div className="mt-auto flex items-center lg:ml-20 lg:mt-0 lg:block">
                      <div className="mr-6 w-20 lg:mb-11 lg:mr-0 lg:w-40">
                        <Image
                          className="w-full rounded-2xl"
                          src={comment.avatarUrl}
                          width={160}
                          height={160}
                          alt={comment.name}
                        />
                      </div>
                      <div>
                        <h6 className="h6">{comment.name}</h6>
                        <div className="caption text-n-1/25">{comment.role}</div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
            <div
              className="-mx-2 mt-10 flex justify-center md:mt-12 md:justify-start lg:absolute lg:right-20
                         lg:top-0 lg:m-0 lg:h-full lg:flex-col lg:justify-center"
            >
              {community.map((item: any, index: number) => (
                <button
                  className="relative mx-2 h-6 w-6 lg:mx-0 lg:my-2"
                  onClick={() => handleClick(index)}
                  key={item.id}
                >
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
          <div className="absolute -top-14 left-0 z-2 font-code text-[11.25rem] leading-none text-color-1 md:left-12">
            “
          </div>
          <div className="absolute right-0 top-0 bg-n-8">
            <svg width="72" height="72" viewBox="0 0 72 72">
              <path
                fill="#0E0C15"
                stroke="#FFC876"
                strokeWidth="2"
                strokeOpacity=".8"
                d="M-1176,1 L6.15,1 C13.89,1 21.35,3.89547 27.06,9.11714 L60.91,40.0541 C67.34,45.9271 71,54.2315 71,62.937 L71,444 C71,461.121 57.12,475 40,475 L-1176,475 C-1193.1209,475 -1207,461.121 -1207,444 L-1207,32 C-1207,14.8792 -1193.1208,1 -1176,1 Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Community
