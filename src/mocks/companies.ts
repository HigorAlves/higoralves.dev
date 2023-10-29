import { CompanyName, EmploymentType, ICompany, LocationType } from '~/types/companies.type'

export const COMPANIES: Record<CompanyName | string, ICompany> = {
  arctouch: {
    job: 'Senior Software Engineer',
    name: 'ArchTouch',
    website: 'https://arctouch.com/',
    rating: 5,
    icon: 'handRock',
    show: true,
    address: {
      city: 'Florianópolis',
      country: 'Brazil',
    },
    duration: {
      startDate: new Date('Octuber 02, 2023').toDateString(),
      endDate: 'present',
    },
    contract: {
      employmentType: EmploymentType.FULLTIME,
      locationType: LocationType.REMOTE,
    },
    description:
      "We help companies forge meaningful connections with their customers and employees through lovable apps, websites, and digital products. Since the dawn of the app revolution, we've helped businesses of all sizes, from the Fortune 500 to innovative startups.",
  },
  datum: {
    job: 'Senior Software Engineer',
    name: 'Datum',
    website: 'https://datumit.com/',
    rating: 5,
    icon: 'balloon',
    show: true,
    address: {
      city: 'Florianópolis',
      country: 'Brazil',
    },
    duration: {
      startDate: new Date('September 12, 2023').toDateString(),
      endDate: 'present',
    },
    contract: {
      employmentType: EmploymentType.CONTRACTOR,
      locationType: LocationType.REMOTE,
    },
    description:
      'Datum has been impacting the global IT market for 23 years with innovation, technology, and agile team management. The company operates in the development of multiplatform software, mobile applications and SAP consulting, outsourcing highly skilled professionals.',
  },
  ask: {
    job: 'Senior Software Engineer',
    name: 'AMG - Ask Media Group',
    website: 'https://ask.com',
    rating: 5,
    icon: 'handRock',
    show: true,
    address: {
      city: 'San Francisco',
      country: 'United States',
    },
    duration: {
      startDate: new Date('May 15, 2023').toDateString(),
      endDate: 'present',
    },
    contract: {
      employmentType: EmploymentType.FULLTIME,
      locationType: LocationType.REMOTE,
    },
    description:
      'Founded as Ask Jeeves in 1996 and re-named Ask.com in 2005, Ask.com has spent the last 20 years committed to its mission of increasing personal knowledge by empowering people with answers. Our collection of websites now comprise of the Ask Media Group. ',
  },
  doare: {
    job: 'Technology Consultant',
    name: 'Doare',
    website: 'https://doare.org',
    rating: 3,
    icon: 'balloon',
    show: true,
    address: {
      city: 'Florianópolis',
      country: 'Brazil',
    },
    duration: {
      startDate: new Date('June 25, 2023').toDateString(),
      endDate: new Date('11/08/2023').toDateString(),
    },
    contract: {
      employmentType: EmploymentType.CONSULTANT,
      locationType: LocationType.REMOTE,
    },
    description:
      'Doare strengthens philanthropic organizations through fundraising solutions. Amplifies corporate donations to increase employee engagement in companies. Connects people with important causes to donate safely.',
  },
  '123milhas': {
    job: 'Senior Software Engineer',
    name: 'Grupo 123',
    website: 'https://123milhas.com',
    rating: 1,
    icon: 'flag',
    show: true,
    address: {
      city: 'Belo Horizonte',
      country: 'Brazil',
    },
    duration: {
      startDate: new Date('April 24, 2023').toDateString(),
      endDate: new Date('September 02, 2023').toDateString(),
    },
    contract: {
      employmentType: EmploymentType.CONTRACTOR,
      locationType: LocationType.REMOTE,
    },
    description:
      'We are an online agency that offers complete travel experiences from start to finish, so that people open to exploring the world can travel more and more with savings, innovation and care at all times.',
  },
  zipdev: {
    job: 'Senior Software Engineer',
    name: 'Zipdev',
    website: 'https://zipdev.com',
    rating: 4,
    icon: 'balloon',
    show: true,
    address: {
      city: 'San Francisco',
      country: 'United States',
    },
    duration: {
      startDate: new Date('July 01, 2022').toDateString(),
      endDate: new Date('April 15, 2022').toDateString(),
    },
    contract: {
      employmentType: EmploymentType.CONTRACTOR,
      locationType: LocationType.REMOTE,
    },
    description:
      'Our dual goal is to empower clients’ technology recruiting and staffing efforts and provide our team members with rewarding careers.',
  },
  notchteam: {
    job: 'Senior Software Engineer',
    name: 'Notch Team',
    website: 'https://notchteam.com',
    rating: 4.5,
    icon: 'handRock',
    show: true,
    address: {
      city: 'San Francisco',
      country: 'United States',
    },
    duration: {
      startDate: new Date('December 01, 2022').toDateString(),
      endDate: new Date('March 24, 2023').toDateString(),
    },
    contract: {
      employmentType: EmploymentType.CONTRACTOR,
      locationType: LocationType.REMOTE,
    },
    description:
      'Notch is an hiring and recruiting platform that automates sourcing, vetting, matching, and managing tech talent for global teams. Companies can onboard jobs in less than a minute, and our platform delivers vetted, ready-to-hire candidates intelligently matched from our global talent pool and recruiter network. All with no upfront costs and the most flexible hiring and payment options. Today, we help hundreds of fast-growing startups from early-stage to $100M+ in funding accelerate their hiring for any role, anywhere.',
  },
  righbalance: {
    job: 'Senior Software Engineer',
    name: 'Right Balance',
    website: 'https://rightbalance.io',
    rating: 2.5,
    address: {
      city: 'San Francisco',
      country: 'United States',
    },
    duration: {
      startDate: new Date('September 01, 2022').toDateString(),
      endDate: new Date('March 03, 2023').toDateString(),
    },
    icon: 'balloon',
    show: true,
    contract: {
      employmentType: EmploymentType.CONTRACTOR,
      locationType: LocationType.REMOTE,
    },
    description:
      'Trusted by many successful technology leaders coming from companies like Amazon, Microsoft, SpaceX, Honest Company, MySpace, and more, Right Balance helps quickly acquire motivated quality engineers at volume from a pool of 152k+ engineers worldwide matching your needs and culture.',
  },
  xteam: {
    job: 'Senior Software Engineer',
    name: 'X-Team',
    website: 'https://x-team.com',
    rating: 5,
    address: {
      city: 'San Francisco',
      country: 'United States',
    },
    duration: {
      startDate: new Date('August 01, 2021').toDateString(),
      endDate: new Date('December 01, 2022').toDateString(),
    },
    icon: 'star',
    show: true,
    contract: {
      employmentType: EmploymentType.CONTRACTOR,
      locationType: LocationType.REMOTE,
    },
    description:
      'We are leaders in the remote work movement, and believe in building a world where developers can have access to an environment of growth and incredible opportunities regardless of where they live.',
  },
  tradersclub: {
    job: 'Software Engineer',
    name: 'Traders Club',
    website: 'https://tc.com.br',
    rating: 3.5,
    address: {
      country: 'Brazil',
      city: 'São Paulo',
    },
    duration: {
      startDate: new Date('July 01, 2021').toDateString(),
      endDate: new Date('March 01, 2022').toDateString(),
    },
    icon: 'balloon',
    show: true,
    contract: {
      employmentType: EmploymentType.CONTRACTOR,
      locationType: LocationType.REMOTE,
    },
    description:
      'With TC you stay informed about everything that happens in the financial market, receive high-impact news directly on your cell phone and also closely monitor your assets, receiving rational investment ideas from investors, traders and managers.',
  },
  nkey: {
    job: 'Senior Software Engineer',
    name: 'NKey',
    website: 'https://www.nkey.com.br',
    rating: 2,
    icon: 'balloon',
    show: true,
    contract: {
      employmentType: EmploymentType.CONTRACTOR,
      locationType: LocationType.REMOTE,
    },
    address: {
      city: 'Florianopolis',
      country: 'Brazil',
    },
    duration: {
      startDate: new Date('July 30, 2021').toDateString(),
      endDate: new Date('June 15, 2022').toDateString(),
    },
    description:
      'With 10 years of experience and a profile focused on software engineering and quality as well as design and ergonomics, our developers and artists have participated in projects for some of the largest companies in the world.',
  },
  toroinvestimentos: {
    job: 'Senior Software Engineer',
    name: 'Toro Investimentos',
    website: 'https://toroinvestimentos.com.br',
    rating: 4,
    address: {
      city: 'Belo Horizonte',
      country: 'Brazil',
    },
    duration: {
      startDate: new Date('April 01, 2021').toDateString(),
      endDate: new Date('July 01, 2021').toDateString(),
    },
    icon: 'balloon',
    show: true,
    contract: {
      employmentType: EmploymentType.FULLTIME,
      locationType: LocationType.REMOTE,
    },
    description:
      'Your best way to invest Invest in shares, BDRs, Real Estate Funds, Fixed Income, ETFs and Investment Funds from the best managers in the country. Have the credibility of a Santander Brasil company.',
  },
  takeblip: {
    job: 'Software Engineer',
    name: 'Take Blip',
    website: 'https://www.take.net/en/home/',
    rating: 0.5,
    address: {
      city: 'Belo Horizonte',
      country: 'Brazil',
    },
    duration: {
      startDate: new Date('February 01, 2021').toDateString(),
      endDate: new Date('April 01, 2021').toDateString(),
    },
    icon: 'flag',
    show: true,
    contract: {
      employmentType: EmploymentType.FULLTIME,
      locationType: LocationType.HYBRID,
    },
    description:
      'We connect people and companies in intelligent chat on the main messaging channels that sell, serve, solve and surprise. For this, we combine the best of technology and human knowledge in our company and on the Blip platform, always anticipating and creating trends.',
  },
  monetus: {
    job: 'Software Engineer',
    name: 'Monetus',
    website: 'https://mobillsinvestimentos.com.br',
    rating: 3,
    address: {
      city: 'Belo Horizonte',
      country: 'Brazil',
    },
    duration: {
      startDate: new Date('November 01, 2020').toDateString(),
      endDate: new Date('April 01, 2021').toDateString(),
    },
    icon: 'balloon',
    show: true,
    contract: {
      employmentType: EmploymentType.FULLTIME,
      locationType: LocationType.REMOTE,
    },
    description:
      "​Monetus is redefining investing in Brazil. Combining state of the art technology, design and data, Monetus offers an incredible investment experience — one that's simple, profitable and secure. For everyone.",
  },
  natahouse: {
    job: 'Software Engineer',
    name: 'Nata.House',
    website: 'https://natahouse.com',
    rating: 4.5,
    address: {
      city: 'Belo Horizonte',
      country: 'Brazil',
    },
    duration: {
      startDate: new Date('June 01, 2020').toDateString(),
      endDate: new Date('February 01, 2021').toDateString(),
    },
    icon: 'balloon',
    show: true,
    contract: {
      employmentType: EmploymentType.FULLTIME,
      locationType: LocationType.HYBRID,
    },
    description:
      'nata.house offers different services so that our partners and customers have the best digital solutions and achieve digital transformation. We carry out a complete contextualization of your company and its challenges, so that our delivery is adapted to your needs.',
  },
  novacdevs: {
    job: 'Software Engineer',
    name: 'Novac Devs',
    website: 'https://higoralves.dev',
    rating: 5,
    address: {
      city: 'Itapecerica',
      country: 'Brazil',
    },
    duration: {
      startDate: new Date('March 01, 2018').toDateString(),
      endDate: new Date('June 01, 2020').toDateString(),
    },
    icon: 'balloon',
    show: true,
    contract: {
      employmentType: EmploymentType.FULLTIME,
      locationType: LocationType.HYBRID,
    },
    description:
      'We are the driving force behind innovation in the software development world. We specialize in creating cutting-edge software solutions while nurturing the next generation of developers through our comprehensive courses.',
  },
  perallis: {
    job: 'Software Engineer',
    name: 'Perallis Security',
    website: 'https://hackerrangers.com',
    rating: 3.5,
    address: {
      city: 'Campinas',
      country: 'Brazil',
    },
    duration: {
      startDate: new Date('April 01, 2019').toDateString(),
      endDate: new Date('September 01, 2019').toDateString(),
    },
    icon: 'balloon',
    show: true,
    contract: {
      employmentType: EmploymentType.FULLTIME,
      locationType: LocationType.REMOTE,
    },
    description:
      'Hacker Rangers is a gamification platform for user education and engagement. It\'s purpose is to lead the employees of an organization to adopt "cybersecure" habits through inherent motivation.',
  },
  fiocruz: {
    job: 'Mobile Engineer',
    name: 'UNA/SUS',
    website: 'https://www.unasus.gov.br',
    rating: 4,
    address: {
      city: 'Brasília',
      country: 'Brazil',
    },
    duration: {
      startDate: new Date('March 01, 2018').toDateString(),
      endDate: new Date('August 01, 2019').toDateString(),
    },
    icon: 'balloon',
    show: true,
    contract: {
      employmentType: EmploymentType.FULLTIME,
      locationType: LocationType.HYBRID,
    },
    description:
      'A pioneering initiative in Brazil, dedicated to the advancement of public health and the improvement of healthcare services through education and training. This online platform serves as a vital resource for healthcare professionals, students, and anyone interested in the field of public health.',
  },
  unesco: {
    name: 'UNESCO',
    job: 'Technology Consultant',
    website: 'https://www.unesco.org/en',
    rating: 4,
    icon: 'balloon',
    show: true,
    address: {
      city: 'Brasília',
      country: 'Brazil',
    },
    duration: {
      startDate: new Date('Jan 01, 2017').toDateString(),
      endDate: new Date('Apr 01, 2019').toDateString(),
    },
    contract: {
      employmentType: EmploymentType.CONSULTANT,
      locationType: LocationType.REMOTE,
    },
    description:
      'United Nations Educational, Scientific and Cultural Organization (UNESCO) was founded on 16 November 1945. For this specialized United Nations agency, it is not enough to build classrooms in devastated countries or to publish scientific breakthroughs. Education, Social and Natural Science, Culture and Communication are the means to a far more ambitious goal : to build peace in the minds of women and men.',
  },
  edulivre: {
    job: 'Software Engineer',
    name: 'Educação Livre',
    website: 'https://www.edulivre.org.br',
    rating: 5,
    address: {
      city: 'Brasília',
      country: 'Brazil',
    },
    duration: {
      startDate: new Date('January 01, 2017').toDateString(),
      endDate: new Date('April 01, 2019').toDateString(),
    },
    icon: 'balloon',
    show: true,
    contract: {
      employmentType: EmploymentType.FULLTIME,
      locationType: LocationType.HYBRID,
    },
    description:
      'Free Education is a social technology for the education and development of young people who have difficulty finding meaning in their life journey. Its objective is to transform the mentality of these young people in relation to their choices and their future.',
  },
  ufsj: {
    job: 'Intern',
    name: 'Universidade Federal de São João del Rey',
    website: 'https://ufsj.edu.br',
    rating: 3,
    address: {
      city: 'São João del-Rei',
      country: 'Brazil',
    },
    duration: {
      startDate: new Date('January 01, 2016').toDateString(),
      endDate: new Date('January 01, 2017').toDateString(),
    },
    icon: 'track',
    show: true,
    contract: {
      employmentType: EmploymentType.FULLTIME,
      locationType: LocationType.HYBRID,
    },
    description:
      'The Federal University of São João del-Rei (UFSJ) was established, on April 21, 1987, as the São João del-Rei Higher Education Foundation (FUNREI). In 2002, it was transformed into a University.',
  },
}
