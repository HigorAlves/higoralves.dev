import Image from '~/components/Image'
import Section from '~/components/Section'
import Tagline from '~/components/Tagline'
import { roadmapFull } from '~/mocks/roadmap'

type RoadmapProps = {}

const Roadmap = ({}: RoadmapProps) => (
  <Section>
    <div className="container max-w-[70rem]">
      <ul className="-mb-15 md:mb-0">
        {roadmapFull.map((item) => (
          <li className="relative mb-15 md:mb-0 md:flex" key={item.id}>
            <div className="mb-3 flex h-14 items-center md:mb-0 md:h-[6.5rem] md:w-[16rem] lg:h-[9.5rem]">
              <Tagline className="mr-8">{item.date}</Tagline>
              <div className="h-0.25 w-32 bg-n-6 md:flex-1"></div>
            </div>
            <div className="md:flex md:flex-1 md:border-l md:border-n-6 md:p-6 lg:px-20 lg:py-12">
              <div className="mb-6 md:mb-0 md:mr-6 md:w-14 md:flex-shrink-0">
                <Image
                  src={item.status === 'done' ? '/images/roadmap/done.svg' : '/images/roadmap/undone.svg'}
                  width={56}
                  height={56}
                  alt="Done"
                />
              </div>
              <div className="md:flex-1">
                <div className="mb-5 md:mb-6 md:flex md:min-h-[3.5rem] md:items-center md:justify-between">
                  <h5 className="h5">{item.title}</h5>
                  {item.status === 'progress' && (
                    <div className="absolute right-0 top-4 flex items-center rounded bg-n-1 px-4 py-1 text-n-8 md:static md:ml-6 md:mt-4 md:flex-shrink-0 md:self-start">
                      <Image
                        className="mr-2.5"
                        src="/images/icons/loading-01.svg"
                        width={16}
                        height={16}
                        alt="In progress"
                      />
                      <div className="tagline">WIP</div>
                    </div>
                  )}
                </div>
                <p className="body-2 text-n-4">{item.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </Section>
)

export default Roadmap
