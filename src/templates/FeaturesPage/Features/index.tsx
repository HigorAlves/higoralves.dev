import Image from '~/components/Image'
import Section from '~/components/Section'

type FeaturesProps = {}

const Features = ({}: FeaturesProps) => {
  const content = [
    {
      id: '0',
      title: 'Seamless Integration',
      text: "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.",
    },
    {
      id: '1',
      title: 'Smart Automation',
    },
    {
      id: '2',
      title: 'Top-notch Security',
    },
  ]

  return (
    <Section>
      <div className="container">
        <div className="-mb-16">
          {[
            { id: '0', imageUrl: '/images/features/image-1.jpg' },
            { id: '1', imageUrl: '/images/features/image-1.jpg' },
            { id: '2', imageUrl: '/images/features/image-1.jpg' },
          ].map((item, index) => (
            <div className="mb-16 md:grid md:grid-cols-2 md:items-center lg:gap-20 xl:gap-40" key={item.id}>
              <div className={`mb-8 rounded-3xl bg-n-6 md:relative md:mb-0 ${index % 2 === 0 ? '' : 'md:order-1'}`}>
                <Image className="w-full rounded-3xl" src={item.imageUrl} width={550} height={600} alt="Image" />
                <div
                  className={`absolute -right-8 bottom-5 top-5 hidden w-8 grid-cols-2 md:grid ${
                    index % 2 === 0 ? '-right-8' : '-left-8 rotate-180'
                  }`}
                >
                  <div className="rounded-r-[1.25rem] bg-[#1B1B2E]"></div>
                  <div className="my-5 rounded-r-[1.25rem] bg-[#1B1B2E]/50"></div>
                </div>
              </div>
              <div className={index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}>
                <h2 className="h2 mb-4 md:mb-8">Customization Options</h2>
                <ul className="">
                  {content.map((item) => (
                    <li className="border-b border-n-1/5 py-4 md:py-6" key={item.id}>
                      <div className="flex items-center">
                        <Image src="/images/check.svg" width={24} height={24} alt="Check" />
                        <h6 className="body-2 ml-5">{item.title}</h6>
                      </div>
                      {item.text && <p className="body-2 mt-3 text-n-4">{item.text}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Features
