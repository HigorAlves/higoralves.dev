import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import Arrows from '~/components/Arrows'
import Button from '~/components/Button'
import Heading from '~/components/Heading'
import Image from '~/components/Image'
import Section from '~/components/Section'

import { testimonials } from '~/mocks/testimonials'

type TestimonialsProps = {}

const Testimonials = ({}: TestimonialsProps) => (
  <Section className="overflow-hidden">
    <div className="container relative z-2">
      <Heading tag="Ready to get started" title="What the community is saying" />
      <Splide
        className="splide-custom splide-visible"
        options={{
          mediaQuery: 'min',
          gap: '1.5rem',
          breakpoints: {
            1024: {
              autoWidth: true,
            },
          },
          rewind: true,
          pagination: false,
        }}
        hasTrack={false}
      >
        <SplideTrack>
          {testimonials.map((item) => (
            <SplideSlide key={item.id}>
              <div className="relative flex h-full overflow-hidden rounded-t-xl p-4 lg:w-[46.125rem]">
                <div className="absolute bottom-[3.25rem] left-0 right-0 top-0 rounded-3xl border border-n-4/50"></div>
                <div className="absolute inset-px overflow-hidden rounded-t-[1.4375rem]">
                  <div className="absolute -inset-0.25">
                    <Image
                      className="h-full w-full object-cover"
                      src={item.imageUrl}
                      width={739}
                      height={472}
                      alt={item.name}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-n-8/50 to-n-8/0"></div>
                <div className="relative z-1 hidden flex-1 flex-col px-4 pb-16 pt-12 md:flex">
                  <div className="mb-auto h-10 w-[12.75rem]">
                    <Image
                      className="h-full w-full object-contain"
                      src={item.logoUrl}
                      width={204}
                      height={40}
                      alt={item.name}
                    />
                  </div>
                  <div className="h5">{item.name}</div>
                  <div className="h5 text-n-4">{item.role}</div>
                </div>
                <div className="relative z-1 flex rounded-2xl bg-conic-gradient p-0.25 md:ml-auto">
                  <div className="flex flex-col items-start rounded-[0.9375rem] bg-n-8 p-8 md:w-[21.75rem]">
                    <p className="quote mb-8">{item.text}</p>
                    <Button className="mt-auto">Visit link</Button>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
        <Arrows className="mt-12 justify-center md:mt-15 xl:mt-20" prevClassName="mr-8" />
      </Splide>
    </div>
  </Section>
)

export default Testimonials
