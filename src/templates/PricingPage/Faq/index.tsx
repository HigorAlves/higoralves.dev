import { useState } from 'react'
import Heading from '~/components/Heading'
import Section from '~/components/Section'

import { faq } from '~/mocks/faq'

type FaqProps = {}

const Faq = ({}: FaqProps) => {
  const [activeId, setActiveId] = useState<string | null>(faq[0].id)

  return (
    <Section>
      <div className="container lg:flex">
        <Heading
          className="lg:mr-12 lg:min-w-[22.75rem] lg:pt-8 xl:min-w-[32.75rem]"
          textAlignClassName="md:text-center lg:text-left"
          title="Frequently asked questions"
          text={
            <>
              Haven’t found what you’re looking for?{' '}
              <a className="text-n-1 hover:text-color-2" href="mailto:info@ui8.net">
                Contact us
              </a>
            </>
          }
        />
        <div className="-mt-8 lg:mt-0">
          {faq.map((item) => (
            <div className="border-b border-n-1/5 py-8" key={item.id}>
              <div
                className="flex cursor-pointer items-start justify-between"
                onClick={() => setActiveId(activeId === item.id ? null : item.id)}
              >
                <div className="text-[1.25rem] leading-8">{item.title}</div>
                <div className="relative ml-10 mt-1 h-6 w-6">
                  <div className="absolute left-1 top-[0.6875rem] h-0.5 w-4 rounded-sm bg-n-1"></div>
                  <div
                    className={`absolute left-1 top-[0.6875rem] h-0.5 w-4 rounded-sm bg-n-1 transition-transform ${
                      item.id === activeId ? '' : 'rotate-90'
                    }`}
                  ></div>
                </div>
              </div>
              <div className={`grid grid-rows-[0fr] transition-all ${item.id === activeId ? 'grid-rows-[1fr]' : ''}`}>
                <div className="body-2 overflow-hidden text-n-3">
                  <div className="pt-6">{item.text}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Faq
