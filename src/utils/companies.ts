import {
	IconBalloon,
	IconFlag,
	IconStar,
	IconHandRock,
	IconTrack
} from '@tabler/icons-react'

import {
	CompanyName,
	EmploymentType,
	ICompany,
	LocationType
} from '~/types/companies'
import { DateMath } from '~/utils/DateMath'

const totalTime = new DateMath()

export const COMPANIES: Record<CompanyName, ICompany> = {
	zipdev: {
		job: 'Senior Software Engineer',
		name: 'Zipdev',
		website: 'https://zipdev.com',
		icon: IconBalloon,
		show: true,
		address: {
			city: 'San Francisco',
			country: 'United States'
		},
		duration: {
			startDate: new Date('July 01, 2022').toDateString(),
			endDate: 'Present',
			total: totalTime.calculateTimeSinceStartDate(new Date('July 01, 2022'))
		},
		contract: {
			employmentType: EmploymentType.CONTRACTOR,
			locationType: LocationType.REMOTE
		}
	},
	notchteam: {
		job: 'Senior Software Engineer',
		name: 'Notch Team',
		website: 'https://notchteam.com',
		icon: IconHandRock,
		show: true,
		address: {
			city: 'San Francisco',
			country: 'United States'
		},
		duration: {
			startDate: new Date('December 01, 2022').toDateString(),
			endDate: new Date('March 24, 2023').toDateString(),
			total: totalTime.calculateTimeBetweenDates(
				new Date('December 01, 2022'),
				new Date('March 24, 2023')
			)
		},
		contract: {
			employmentType: EmploymentType.CONTRACTOR,
			locationType: LocationType.REMOTE
		}
	},
	righbalance: {
		job: 'Senior Software Engineer',
		name: 'Right Balance',
		website: 'https://rightbalance.io',
		address: {
			city: 'San Francisco',
			country: 'United States'
		},
		duration: {
			startDate: new Date('September 01, 2022').toDateString(),
			endDate: new Date('March 03, 2023').toDateString(),
			total: totalTime.calculateTimeBetweenDates(
				new Date('September 01, 2022'),
				new Date('March 03, 2023')
			)
		},
		icon: IconBalloon,
		show: true,
		contract: {
			employmentType: EmploymentType.CONTRACTOR,
			locationType: LocationType.REMOTE
		}
	},
	xteam: {
		job: 'Senior Software Engineer',
		name: 'X-Team',
		website: 'https://x-team.com',
		address: {
			city: 'San Francisco',
			country: 'United States'
		},
		duration: {
			startDate: new Date('August 01, 2021').toDateString(),
			endDate: new Date('December 01, 2022').toDateString(),
			total: totalTime.calculateTimeBetweenDates(
				new Date('August 01, 2021'),
				new Date('December 01, 2022')
			)
		},
		icon: IconStar,
		show: true,
		contract: {
			employmentType: EmploymentType.CONTRACTOR,
			locationType: LocationType.REMOTE
		}
	},
	tradersclub: {
		job: 'Software Engineer',
		name: 'Traders Club',
		website: 'https://tc.com.br',
		address: {
			country: 'Brazil',
			city: 'São Paulo'
		},
		duration: {
			startDate: new Date('July 01, 2021').toDateString(),
			endDate: new Date('March 01, 2022').toDateString(),
			total: totalTime.calculateTimeBetweenDates(
				new Date('July 01, 2021'),
				new Date('March 01, 2022')
			)
		},
		icon: IconBalloon,
		show: true,
		contract: {
			employmentType: EmploymentType.FULLTIME,
			locationType: LocationType.REMOTE
		}
	},
	nkey: {
		job: 'Senior Software Engineer',
		name: 'NKey',
		website: 'https://www.nkey.com.br',
		contract: {
			employmentType: EmploymentType.FULLTIME,
			locationType: LocationType.REMOTE
		},
		address: {
			city: 'Florianopolis',
			country: 'Brazil'
		},
		duration: {
			startDate: new Date('July 30, 2021').toDateString(),
			endDate: new Date('June 15, 2022').toDateString(),
			total: totalTime.calculateTimeBetweenDates(
				new Date('July 30, 2021'),
				new Date('June 15, 2022')
			)
		},
		icon: IconBalloon,
		show: true
	},
	toroinvestimentos: {
		job: 'Senior Software Engineer',
		name: 'Toro Investimentos',
		website: 'https://toroinvestimentos.com.br',
		address: {
			city: 'Belo Horizonte',
			country: 'Brazil'
		},
		duration: {
			startDate: new Date('April 01, 2021').toDateString(),
			endDate: new Date('July 01, 2021').toDateString(),
			total: totalTime.calculateTimeBetweenDates(
				new Date('April 01, 2021'),
				new Date('July 01, 2021')
			)
		},
		icon: IconBalloon,
		show: true,
		contract: {
			employmentType: EmploymentType.FULLTIME,
			locationType: LocationType.REMOTE
		}
	},
	takeblip: {
		job: 'Software Engineer',
		name: 'Take Blip',
		website: 'https://www.take.net/en/home/',
		address: {
			city: 'Belo Horizonte',
			country: 'Brazil'
		},
		duration: {
			startDate: new Date('February 01, 2021').toDateString(),
			endDate: new Date('April 01, 2021').toDateString(),
			total: totalTime.calculateTimeBetweenDates(
				new Date('February 01, 2021'),
				new Date('April 01, 2021')
			)
		},
		icon: IconFlag,
		show: true,
		contract: {
			employmentType: EmploymentType.FULLTIME,
			locationType: LocationType.HYBRID
		}
	},
	monetus: {
		job: 'Software Engineer',
		name: 'Monetus',
		website: 'https://mobillsinvestimentos.com.br',
		address: {
			city: 'Belo Horizonte',
			country: 'Brazil'
		},
		duration: {
			startDate: new Date('November 01, 2020').toDateString(),
			endDate: new Date('April 01, 2021').toDateString(),
			total: totalTime.calculateTimeBetweenDates(
				new Date('November 01, 2020'),
				new Date('April 01, 2021')
			)
		},
		icon: IconBalloon,
		show: true,
		contract: {
			employmentType: EmploymentType.FULLTIME,
			locationType: LocationType.REMOTE
		}
	},
	natahouse: {
		job: 'Software Engineer',
		name: 'Nata.House',
		website: 'https://natahouse.com',
		address: {
			city: 'Belo Horizonte',
			country: 'Brazil'
		},
		duration: {
			startDate: new Date('June 01, 2020').toDateString(),
			endDate: new Date('February 01, 2021').toDateString(),
			total: totalTime.calculateTimeBetweenDates(
				new Date('June 01, 2020'),
				new Date('February 01, 2021')
			)
		},
		icon: IconBalloon,
		show: true,
		contract: {
			employmentType: EmploymentType.FULLTIME,
			locationType: LocationType.HYBRID
		}
	},
	fabricademvp: {
		job: 'Software Engineer',
		name: 'Fabrica de MVP',
		website: null,
		address: {
			city: 'Campinas',
			country: 'Brazil'
		},
		duration: {
			startDate: new Date('March 01, 2018').toDateString(),
			endDate: new Date('June 01, 2020').toDateString(),
			total: totalTime.calculateTimeBetweenDates(
				new Date('March 01, 2018'),
				new Date('June 01, 2020')
			)
		},
		icon: IconBalloon,
		show: true,
		contract: {
			employmentType: EmploymentType.FULLTIME,
			locationType: LocationType.HYBRID
		}
	},
	perallis: {
		job: 'Software Engineer',
		name: 'Perallis Security',
		website: 'https://hackerrangers.com',
		address: {
			city: 'Campinas',
			country: 'Brazil'
		},
		duration: {
			startDate: new Date('April 01, 2019').toDateString(),
			endDate: new Date('September 01, 2019').toDateString(),
			total: totalTime.calculateTimeBetweenDates(
				new Date('April 01, 2019'),
				new Date('September 01, 2019')
			)
		},
		icon: IconBalloon,
		show: true,
		contract: {
			employmentType: EmploymentType.FULLTIME,
			locationType: LocationType.REMOTE
		}
	},
	fiocruz: {
		job: 'Mobile Engineer',
		name: 'UNA/SUS',
		website: 'https://www.unasus.gov.br',
		address: {
			city: 'Brasília',
			country: 'Brazil'
		},
		duration: {
			startDate: new Date('March 01, 2018').toDateString(),
			endDate: new Date('August 01, 2019').toDateString(),
			total: totalTime.calculateTimeBetweenDates(
				new Date('March 01, 2018'),
				new Date('August 01, 2019')
			)
		},
		icon: IconBalloon,
		show: true,
		contract: {
			employmentType: EmploymentType.FULLTIME,
			locationType: LocationType.HYBRID
		}
	},
	unesco: {
		name: 'UNESCO',
		job: 'Technology Consultant',
		website: 'https://www.unesco.org/en',

		icon: IconBalloon,
		show: true,
		address: {
			city: 'Brasília',
			country: 'Brazil'
		},
		duration: {
			startDate: new Date('Jan 01, 2017').toDateString(),
			endDate: new Date('Apr 01, 2019').toDateString(),
			total: totalTime.calculateTimeBetweenDates(
				new Date('Jan 01, 2017'),
				new Date('Apr 01, 2019')
			)
		},
		contract: {
			employmentType: EmploymentType.FULLTIME,
			locationType: LocationType.REMOTE
		}
	},
	edulivre: {
		job: 'Software Engineer',
		name: 'Educação Livre',
		website: 'https://www.edulivre.org.br',
		address: {
			city: 'Brasília',
			country: 'Brazil'
		},
		duration: {
			startDate: new Date('January 01, 2017').toDateString(),
			endDate: new Date('April 01, 2019').toDateString(),
			total: totalTime.calculateTimeBetweenDates(
				new Date('January 01, 2017'),
				new Date('April 01, 2019')
			)
		},
		icon: IconBalloon,
		show: true,
		contract: {
			employmentType: EmploymentType.FULLTIME,
			locationType: LocationType.HYBRID
		}
	},
	ufsj: {
		job: 'Intern',
		name: 'UFSJ',
		website: 'https://ufsj.edu.br',
		address: {
			city: 'São João del-Rei',
			country: 'Brazil'
		},
		duration: {
			startDate: new Date('January 01, 2016').toDateString(),
			endDate: new Date('January 01, 2017').toDateString(),
			total: totalTime.calculateTimeBetweenDates(
				new Date('January 01, 2016'),
				new Date('January 01, 2017')
			)
		},
		icon: IconTrack,
		show: true,
		contract: {
			employmentType: EmploymentType.FULLTIME,
			locationType: LocationType.HYBRID
		}
	}
}
