import Image from '~/components/Image'
import Section from '~/components/Section'

type HelpProps = {}

const Help = ({}: HelpProps) => (
  <Section crosses>
    <div className="container pb-10 pt-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-20 lg:p-0">
      <div className="hidden lg:block">
        <div>
          <Image src="/images/help/help.png" width={756} height={756} alt="Help" />
        </div>
      </div>
      <div>
        <h2 className="h2 mb-4 md:mb-6">Need help?</h2>
        <p className="body-2 mb-5 text-n-3">Can’t find your answer, contact us</p>
        <ul>
          {[
            {
              id: '0',
              title: 'Join our community',
              text: 'Discuss anything with other users',
            },
            {
              id: '1',
              title: 'Email us',
              text: 'hello@brainwave.com',
            },
          ].map((item) => (
            <li className="flex items-center border-b border-n-1/15 py-10" key={item.id}>
              <div className="mr-10 flex h-15 w-15 items-center justify-center rounded-xl border border-n-1/15 bg-n-7">
                <Image src="/images/icons/building-01.svg" width={24} height={24} alt="Contact" />
              </div>
              <div>
                <h6 className="h6 text-n-3">{item.title}</h6>
                <p className="body-2 text-n-2">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
)

export default Help
