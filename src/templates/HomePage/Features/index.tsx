import { useRef } from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import Arrows from '~/components/Arrows'
import Button from '~/components/Button'
import Image from '~/components/Image'
import Notification from '~/components/Notification'
import Section from '~/components/Section'

import { features } from '~/mocks/features'

type FeaturesProps = {}

const Features = ({}: FeaturesProps) => {
  const ref = useRef<any>(null)

  return (
    <Section className="overflow-hidden py-10 md:pb-20 lg:pb-32 lg:pt-16 xl:pb-40" customPaddings>
      <div className="container relative z-2">
        <Splide
          className="splide-custom splide-visible"
          options={{
            type: 'fade',
            rewind: true,
            pagination: false,
          }}
          hasTrack={false}
          ref={ref}
        >
          <SplideTrack>
            {features.map((item) => (
              <SplideSlide key={item.id}>
                <div className="lg:flex" key={item.id}>
                  <div className="lg:mr-auto lg:flex lg:max-w-[18.75rem] lg:flex-col lg:items-start">
                    <h2 className="h2 mb-6">{item.title}</h2>
                    <p className="body-2 mb-10 text-n-3">{item.text}</p>
                    <Button>See how it work</Button>
                  </div>
                  <Arrows
                    className="my-10 lg:hidden"
                    prevClassName="mr-3"
                    onPrev={() => ref.current?.go('<')}
                    onNext={() => ref.current?.go('>')}
                  />
                  <div className="relative h-[27.5rem] rounded-3xl border border-n-1/20 md:rounded-[2.5rem] lg:ml-24 lg:h-[34.5rem] lg:max-w-[34.625rem] lg:flex-1 xl:h-[36rem]">
                    <div className="absolute -left-[2rem] top-[8.5rem] w-[21rem] md:-left-[4.5rem] md:top-[6.4rem] md:w-[25.25rem] lg:-left-[3rem] lg:top-[12rem] xl:-left-[4.5rem] xl:top-[7.625rem] xl:w-[32.75rem]">
                      <Image className="w-full" src={item.imageUrl} width={512} height={512} alt="Figure" />
                    </div>
                    <Notification
                      className="absolute bottom-4 left-4 right-4 bg-n-8/95 md:bottom-8 md:left-8 md:right-8"
                      title={item.notification}
                    />
                    <div className="absolute right-6 top-6 flex h-15 w-15 items-center justify-center rounded-full bg-n-1 xl:right-8 xl:top-8">
                      <Image src={item.iconUrl} width={24} height={24} alt="Icon" />
                    </div>
                    <div className="absolute left-full top-0 ml-5 hidden h-full w-full rounded-[2.5rem] border border-n-1/10 bg-n-8/50 md:block"></div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
          <Arrows
            className="-mt-12 hidden lg:flex"
            prevClassName="mr-3"
            onPrev={() => ref.current?.go('<')}
            onNext={() => ref.current?.go('>')}
          />
        </Splide>
      </div>
    </Section>
  )
}

export default Features
