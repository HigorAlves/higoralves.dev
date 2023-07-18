import dynamic from 'next/dynamic'
import { useMediaQuery } from 'react-responsive'
import Heading from '~/components/Heading'
import Image from '~/components/Image'
import Section from '~/components/Section'

import { community } from '~/mocks/community'

const Grid = dynamic(() => import('./Grid'), { ssr: false })
const Carousel = dynamic(() => import('./Carousel'), { ssr: false })

type CommunityProps = {}

const Community = ({}: CommunityProps) => {
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  })

  return (
    <Section>
      <div className="container">
        <Heading
          className="md:text-center"
          tagClassName="md:justify-center"
          tag="ready to get started"
          title="What the community is saying"
        />
        <div className="relative">
          {isTablet ? <Grid items={community} /> : <Carousel items={community} />}
          <div className="pointer-events-none absolute -left-[30.375rem] top-[18.25rem] w-[56.625rem] opacity-60 mix-blend-color-dodge">
            <div className="absolute left-1/2 top-1/2 h-[58.85rem] w-[58.85rem] -translate-x-3/4 -translate-y-1/2">
              <Image className="w-full" src="/images/gradient.png" width={942} height={942} alt="Gradient" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Community
