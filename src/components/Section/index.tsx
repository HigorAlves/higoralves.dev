import { ReactNode } from 'react'

type SectionProps = {
  className?: string
  crosses?: boolean
  crossesOffset?: string
  customPaddings?: boolean
  children: ReactNode
}

const Section = ({ className, crosses, crossesOffset, customPaddings, children }: SectionProps) => (
  <div
    className={`relative ${customPaddings || `py-10 lg:py-16 xl:py-20 ${crosses ? 'lg:py-32 xl:py-40' : ''}`} ${
      className || ''
    }`}
  >
    {children}
    <div className="pointer-events-none absolute left-5 top-0 hidden h-full w-0.25 bg-stroke-1 md:block lg:left-7.5 xl:left-10"></div>
    <div className="pointer-events-none absolute right-5 top-0 hidden h-full w-0.25 bg-stroke-1 md:block lg:right-7.5 xl:right-10"></div>
    {crosses && (
      <>
        <div
          className={`absolute left-7.5 right-7.5 top-0 hidden h-0.25 bg-stroke-1 ${
            crossesOffset && crossesOffset
          } pointer-events-none right-10 lg:block xl:left-10`}
        ></div>
        <svg
          className={`absolute -top-[0.3125rem] left-[1.5625rem] hidden ${
            crossesOffset && crossesOffset
          } pointer-events-none lg:block xl:left-[2.1875rem]`}
          xmlns="http://www.w3.org/2000/svg"
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
          className={`absolute -top-[0.3125rem]  right-[1.5625rem] hidden ${
            crossesOffset && crossesOffset
          } pointer-events-none lg:block xl:right-[2.1875rem]`}
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="11"
          fill="none"
        >
          <path
            d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
            fill="#ada8c4"
          />
        </svg>
      </>
    )}
  </div>
)

export default Section
