'use client'

import { useSearchParams } from 'next/navigation'
import Button from '~/components/Button'
import Image from '~/components/Image'
import Layout from '~/components/Layout'
import Section from '~/components/Section'

const LoginPage = ({}) => {
  const searchParams = useSearchParams()
  const signUp = searchParams.has('new')

  return (
    <Layout hideFooter>
      <Section className="flex min-h-[calc(100vh-4.8125rem)] overflow-hidden lg:min-h-[calc(100vh-5.3125rem)]">
        <div className="container relative z-2 m-auto max-w-[68rem] lg:flex lg:justify-between">
          <div className="mx-auto mb-12 max-w-[32.875rem] text-center md:mb-16 lg:m-0 lg:flex lg:max-w-[23.75rem] lg:flex-col lg:justify-around lg:text-left">
            <h2 className="h2">Join the AI revolution with Brainwave</h2>
            <p className="body-2 mt-4 hidden text-n-4 md:block">
              Get started with Brainwave - AI chat app today and experience the power of AI in your conversations!
            </p>
          </div>
          <form
            className="relative mx-auto max-w-[23.5rem] rounded-3xl bg-conic-gradient p-0.25 lg:m-0 lg:max-w-[27.5rem] lg:flex-1 xl:mr-12"
            action=""
          >
            <div className="rounded-[1.4375rem] bg-n-8 px-9 py-10 lg:px-16 lg:py-[3.25rem]">
              {signUp && (
                <div className="relative mb-4 lg:mb-5">
                  <Image
                    className="pointer-events-none absolute left-0 top-4 w-6"
                    src="/images/icons/mail-01.svg"
                    width={24}
                    height={24}
                    alt="Mail"
                  />
                  <input
                    className="h-14 w-full border-b border-n-1/15 bg-transparent pl-12 font-light outline-none transition-colors placeholder:text-n-4 focus:border-n-1/30"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              )}
              <div className="relative mb-4 lg:mb-5">
                <Image
                  className="pointer-events-none absolute left-0 top-4 w-6"
                  src="/images/icons/mail-01.svg"
                  width={24}
                  height={24}
                  alt="Mail"
                />
                <input
                  className="h-14 w-full border-b border-n-1/15 bg-transparent pl-12 font-light outline-none transition-colors placeholder:text-n-4 focus:border-n-1/30"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="relative mb-4 lg:mb-5">
                <Image
                  className="pointer-events-none absolute left-0 top-4 w-6"
                  src="/images/icons/lock-03.svg"
                  width={24}
                  height={24}
                  alt="Lock"
                />
                <input
                  className="h-14 w-full border-b border-n-1/15 bg-transparent pl-12 font-light outline-none transition-colors placeholder:text-n-4 focus:border-n-1/30"
                  type="text"
                  placeholder="Password"
                />
              </div>
              <Button className="w-full" white>
                {signUp ? 'Sign up now' : 'Sign in'}
              </Button>
              <div className="mt-10">
                <div className="caption mb-6 text-center text-n-4">Or start your Brainwave with</div>
                <div className="flex justify-center">
                  <a
                    className="mx-3 flex h-12 w-12 items-center justify-center rounded-full border border-n-1/5 transition-colors hover:border-n-1/15"
                    href="#"
                  >
                    <svg width="24" height="24">
                      <path
                        fill="#757185"
                        d="M23.049 10h-10.5v4.5h5.951c-.951 3-3.3 4-5.999 4a6.5 6.5 0 0 1-5.33-2.768 6.5 6.5 0 0 1-.787-5.954 6.5 6.5 0 0 1 4.428-4.057 6.5 6.5 0 0 1 5.863 1.302l3.27-3.117a11 11 0 0 0-9.931-2.623 11 11 0 0 0-7.768 6.721A11 11 0 0 0 3.414 18.21 11 11 0 0 0 12.501 23c6.066 0 11.55-4 10.548-13z"
                      />
                    </svg>
                  </a>
                  <a
                    className="mx-3 flex h-12 w-12 items-center justify-center rounded-full border border-n-1/5 transition-colors hover:border-n-1/15"
                    href="#"
                  >
                    <svg width="24" height="24">
                      <path
                        fill="#757185"
                        d="M21.356 16.252c-1.338-.506-2.233-1.721-2.334-3.17-.099-1.412.593-2.666 1.851-3.355l1.046-.573-.747-.93c-1.255-1.563-3.051-2.497-4.804-2.497-1.215 0-2.058.318-2.735.574-.478.181-.855.323-1.269.323-.472 0-.938-.166-1.478-.358-.708-.252-1.51-.538-2.54-.538-1.99 0-3.997 1.188-5.237 3.098-1.851 2.849-1.343 7.734 1.208 11.616 1.011 1.538 2.428 3.305 4.435 3.323h.039c1.643 0 2.003-.876 3.598-.886 1.742.082 1.962.893 3.589.882 1.961-.018 3.375-1.771 4.499-3.484.664-1.007.921-1.534 1.438-2.678l.438-.97-.997-.377zM15.103 3.214c.65-.834 1.143-2.011.964-3.214-1.062.073-2.302.748-3.027 1.628-.658.799-1.201 1.983-.99 3.135 1.158.036 2.357-.656 3.053-1.549z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute -right-12 bottom-6 top-6 hidden xl:flex">
              <div className="w-6 rounded-r-3xl bg-[#1B1B2E]"></div>
              <div className="my-12 w-6 rounded-r-3xl bg-[#1B1B2E]/50"></div>
            </div>
          </form>
        </div>
        <div className="pointer-events-none absolute bottom-5 left-5 right-5 z-4 hidden h-0.25 bg-n-6 md:block lg:bottom-7.5 lg:left-7.5 lg:right-7.5 xl:bottom-10 xl:left-10 xl:right-10"></div>
        <svg
          className="pointer-events-none absolute bottom-[0.9375rem] left-[0.9375rem] z-4 hidden md:block lg:bottom-[1.5625rem] lg:left-[1.5625rem] xl:bottom-[2.1875rem] xl:left-[2.1875rem]"
          width="11"
          height="11"
          fill="none"
        >
          <path
            d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
            fill="#ada8c4"
          />
        </svg>
        <svg
          className="pointer-events-none absolute bottom-[0.9375rem] right-[0.9375rem] z-4 hidden md:block lg:bottom-[1.5625rem] lg:right-[1.5625rem] xl:bottom-[2.1875rem] xl:right-[2.1875rem]"
          width="11"
          height="11"
          fill="none"
        >
          <path
            d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
            fill="#ada8c4"
          />
        </svg>
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover"
            src="/images/login/background.jpg"
            width={1920}
            height={1080}
            quality={100}
            alt="Background"
          />
        </div>
      </Section>
    </Layout>
  )
}

export default LoginPage
