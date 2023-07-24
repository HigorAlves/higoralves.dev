import Button from '~/components/Button'
import Heading from '~/components/Heading'
import Image from '~/components/Image'
import Section from '~/components/Section'
import Tagline from '~/components/Tagline'

import { roadmap } from '~/mocks/roadmap'

type RoadmapProps = {}

const Roadmap = ({}: RoadmapProps) => (
  <Section className="overflow-hidden">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What we’re working on" />
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item, index) => (
          <div
            className={`md:flex ${index % 2 !== 0 ? 'md:translate-y-[7rem]' : ''} rounded-[2.5rem] p-0.25 ${
              item.colorful ? 'bg-conic-gradient' : 'bg-n-6'
            }`}
            key={item.id}
          >
            <div className="relative overflow-hidden rounded-[2.4375rem] bg-n-8 p-8 xl:p-15">
              <div className="absolute left-0 top-0 max-w-full">
                <Image className="w-full" src="/images/grid.png" width={550} height={550} alt="Grid" />
              </div>
              <div className="relative z-1">
                <div className="mb-8 flex max-w-[27rem] items-center justify-between md:mb-20">
                  <Tagline>{item.date}</Tagline>
                  <div className="flex items-center rounded bg-n-1 px-4 py-1 text-n-8">
                    <Image
                      className="mr-2.5"
                      src={item.status === 'done' ? '/images/icons/check.svg' : '/images/icons/loading-01.svg'}
                      width={16}
                      height={16}
                      alt={item.status === 'done' ? 'Done' : 'In progress'}
                    />
                    <div className="tagline">{item.status === 'done' ? 'Done' : 'In progress'}</div>
                  </div>
                </div>
                <div className="mb-8 md:mb-20">
                  <div className="-mx-15 -my-10">
                    <Image className="w-full" src={item.imageUrl} width={628} height={426} alt={item.title} />
                  </div>
                </div>
                <h4 className="h4 mb-4">{item.title}</h4>
                <p className="body-2 text-n-4">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="pointer-events-none absolute -left-[30.375rem] top-[18.25rem] w-[56.625rem] opacity-60 mix-blend-color-dodge">
          <div className="absolute left-1/2 top-1/2 h-[58.85rem] w-[58.85rem] -translate-x-3/4 -translate-y-1/2">
            <Image className="w-full" src="/images/gradient.png" width={942} height={942} alt="Gradient" />
          </div>
        </div>
      </div>
      <div className="mt-12 flex justify-center md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div>
    </div>
  </Section>
)

export default Roadmap
