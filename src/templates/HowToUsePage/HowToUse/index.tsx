import { useState } from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import Button from '~/components/Button'
import Heading from '~/components/Heading'
import Image from '~/components/Image'
import Section from '~/components/Section'
import Tagline from '~/components/Tagline'

import { navigation } from '~/mocks/how-to-use'

type HowToUseProps = {}

const HowToUse = ({}: HowToUseProps) => {
  const [openNavigation, setOpenNavigation] = useState<boolean>(false)
  const [openGroupId, setOpenGroudId] = useState<string | null>('g0')

  return (
    <Section>
      <div className="container md:py-10 lg:pt-16 xl:pt-20">
        <Heading
          textAlignClassName="text-center"
          titleLarge="How to use"
          textLarge="Get started with Brainwave - AI chat app today and experience the power of AI in your conversations!"
        />
        <div className="relative mx-auto mb-15 max-w-[75rem]">
          <Image
            className="pointer-events-none absolute left-6 top-6 w-6 opacity-30"
            src="/images/icons/search-md.svg"
            width={24}
            height={24}
            alt="Search"
          />
          <input
            className="h-[4.5rem] w-full rounded-[2.25rem] border border-n-6 bg-transparent pl-[3.5rem] pr-10 outline-none transition-colors focus:border-n-5"
            type="text"
            placeholder="Search topic"
          />
        </div>
        <div className="lg:flex">
          <div className="mb-16 lg:mr-10 lg:w-[19rem] lg:flex-shrink-0 xl:mr-20">
            <div
              className="flex h-16 w-full cursor-pointer items-center justify-between rounded-xl bg-n-7 px-6 lg:hidden"
              onClick={() => setOpenNavigation(!openNavigation)}
            >
              <div className="h6 text-n-1/50">Getting started</div>
              <Image src="/images/icons/chevron-down.svg" width={24} height={24} alt="Arrow" />
            </div>
            <div className={`pt-4 ${openNavigation ? 'block' : 'hidden'} lg:block lg:pt-0`}>
              {navigation.map((group) => (
                <div className="mb-5" key={group.id}>
                  <button className="flex items-start py-3.5" onClick={() => setOpenGroudId(group.id)}>
                    <div
                      className={`relative my-0.5 mr-5 h-6 w-6 p-0.5 ${
                        group.id === openGroupId ? 'rounded-md border-[0.125rem] border-n-1/15 bg-n-7' : ''
                      }`}
                    >
                      <Image
                        className={`relative z-1 w-full transition-transform ${
                          group.id === openGroupId ? 'rotate-90' : ''
                        }`}
                        src="/images/icons/chevron-right.svg"
                        width={16}
                        height={16}
                        alt="Arrow"
                      />
                    </div>
                    <div className="text-xl">{group.title}</div>
                  </button>
                  <div
                    className={`grid grid-rows-[0fr] transition-all ${
                      group.id === openGroupId ? 'grid-rows-[1fr]' : ''
                    }`}
                  >
                    <ul className="overflow-hidden">
                      {group.items.map((item) => (
                        <li key={item.id}>
                          <ScrollIntoView
                            className="body-2 block cursor-pointer py-3 pl-11 text-n-3 transition-colors hover:text-color-1"
                            selector={`#anchor-${group.id}-${item.id}`}
                          >
                            <span>{item.title}</span>
                          </ScrollIntoView>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="h3 mb-16 border-b border-n-1/15 pb-8">Getting started</h3>
            <div className="relative mb-16">
              <div className="mb-10 flex items-start">
                <h4 className="h4 mr-auto">Sign up</h4>
                <Tagline className="ml-4 mt-4">01</Tagline>
              </div>
              <div className="mb-10">
                <Image
                  className="h-full w-full rounded-3xl object-cover"
                  src="/images/how-to-use/image-1.jpg"
                  width={896}
                  height={600}
                  alt="Image 1"
                />
              </div>
              <div className="body-2 text-n-2">
                <p className="mb-6">
                  {`To create an account with Brainwave - AI
                                        chat app, all you need to do is provide
                                        your name, email address, and password.
                                        Once you have signed up, you will be
                                        able to start exploring the app's
                                        various features. Brainwave's AI chat
                                        system is designed to provide you with
                                        an intuitive, easy-to-use interface that
                                        makes it simple to chat with friends and
                                        family, or even with new acquaintances.`}
                </p>
                <p className="mb-6">
                  In addition, the app is constantly being updated with new features and improvements, so you can expect
                  it to continue to evolve and improve over time. Whether you are looking for a simple chat app, or a
                  more advanced platform that can help you stay connected with people from all over the world, Brainwave
                  is the perfect choice.
                </p>
              </div>
              <div id={`anchor-${openGroupId}-0`} className="absolute -top-32 left-0 h-0.25 w-full"></div>
            </div>
            <div className="relative mb-16">
              <div className="mb-10 flex items-start">
                <h4 className="h4 mr-auto">Connect with AI Chatbot</h4>
                <Tagline className="ml-4 mt-4">02</Tagline>
              </div>
              <div className="mb-10">
                <Image
                  className="h-full w-full rounded-3xl object-cover"
                  src="/images/how-to-use/image-2.jpg"
                  width={896}
                  height={600}
                  alt="Image 2"
                />
              </div>
              <div className="body-2 text-n-2">
                <p className="mb-6">
                  Connect with the AI chatbot to start the conversation. The chatbot uses natural language processing to
                  understand your queries and provide relevant responses.
                </p>
              </div>
              <div id={`anchor-${openGroupId}-1`} className="absolute -top-32 left-0 h-0.25 w-full"></div>
            </div>
            <div className="relative mb-16">
              <div className="mb-10 flex items-start">
                <h4 className="h4 mr-auto">Get Personalized Advices</h4>
                <Tagline className="ml-4 mt-4">03</Tagline>
              </div>
              <div className="mb-10">
                <Image
                  className="h-full w-full rounded-3xl object-cover"
                  src="/images/how-to-use/image-3.jpg"
                  width={896}
                  height={600}
                  alt="Image 3"
                />
              </div>
              <div className="body-2 text-n-2">
                <p className="mb-6">
                  Based on the conversation with the AI chatbot, you will receive personalized recommendations related
                  to your queries. The chatbot is trained to understand your preferences and provide customized
                  suggestions.
                </p>
              </div>
              <div id={`anchor-${openGroupId}-2`} className="absolute -top-32 left-0 h-0.25 w-full"></div>
            </div>
            <div className="relative mb-16">
              <div className="mb-10 flex items-start">
                <h4 className="h4 mr-auto">Explore and Engage</h4>
                <Tagline className="ml-4 mt-4">04</Tagline>
              </div>
              <div className="mb-10">
                <Image
                  className="h-full w-full rounded-3xl object-cover"
                  src="/images/how-to-use/image-4.jpg"
                  width={896}
                  height={600}
                  alt="Image 4"
                />
              </div>
              <div className="body-2 text-n-2">
                <p className="mb-6">
                  Explore the recommendations provided by the AI chatbot and engage with the app. You can ask questions,
                  provide feedback, and share your experience with the chatbot.
                </p>
              </div>
              <div id={`anchor-${openGroupId}-3`} className="absolute -top-32 left-0 h-0.25 w-full"></div>
            </div>
            <div className="flex justify-center">
              <Button>Read more</Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default HowToUse
