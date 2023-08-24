import Image from '~/components/Image'
import Section from '~/components/Section'

type JoinProps = {}

const Join = ({}: JoinProps) => (
  <Section crosses>
    <div className="container">
      <div className="relative mx-auto max-w-[43.125rem] py-8 md:py-14 xl:py-0">
        <div className="relative z-1 text-center">
          <h1 className="h2 mb-6">
            Coding is not just a job, but an art. Paint your future{' '}
            <span className="relative inline-block">
              masterpiece
              <Image
                className="absolute left-0 top-full w-full"
                src="/images/curve.png"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 mb-8 text-n-4">The gladdest moment in human life is a departure into unknown lands</p>
        </div>
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[46.5rem] w-[46.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/5">
          <div className="absolute left-1/2 top-1/2 h-[39.25rem] w-[39.25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10"></div>
          <div className="absolute left-1/2 top-1/2 h-[30.625rem] w-[30.625rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10"></div>
          <div className="absolute left-1/2 top-1/2 h-[21.5rem] w-[21.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10"></div>
          <div className="absolute left-1/2 top-1/2 h-[13.75rem] w-[13.75rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10"></div>
        </div>
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[46.5rem] w-[46.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/5 opacity-60 mix-blend-color-dodge">
          <div className="absolute left-1/2 top-1/2 h-[58.85rem] w-[58.85rem] -translate-x-3/4 -translate-y-1/2">
            <Image className="w-full" src="/images/gradient.png" width={942} height={942} alt="Gradient" />
          </div>
        </div>
      </div>
    </div>
    <div className="pointer-events-none absolute -top-[5.75rem] left-[18.5rem] -z-1 w-[19.8125rem] lg:-top-15 lg:left-[5.5rem]">
      <Image className="w-full" src="/images/join/shapes-1.svg" width={317} height={293} alt="Shapes 1" />
    </div>
    <div className="pointer-events-none absolute -bottom-[7rem] right-[15rem] -z-1 w-[28.1875rem] lg:-bottom-[5rem] lg:right-7">
      <Image className="w-full" src="/images/join/shapes-2.svg" width={451} height={266} alt="Shapes 2" />
    </div>
  </Section>
)

export default Join
