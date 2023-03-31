import BUBBLES_IMG from '~/assets/images/projects/bubbles/bubbles.png'
import SNAPSTRAT_IMG from '~/assets/images/projects/snapstrat/snapStrat.png'
import TILED_IMG from '~/assets/images/projects/tiled/tiled.png'
import { SkillIcons } from '~/components/Icons/SkillIcons'
import { ProjectType } from '~/types/projects'
import { COMPANIES } from '~/utils/companies'

export const PROJECTS: Array<ProjectType> = [
	{
		id: '/projects/snapstrat',
		title: 'SnapStrat',
		thumbnail: SNAPSTRAT_IMG,
		description:
			'Empowers enterprises to improve the outcomes of their recurring strategic decisions through intelligent predictive, data-driven decision model.',
		isFeature: true,
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		carousel: [''],
		company: COMPANIES.zipdev,
		duration: {
			startDate: new Date('July 01, 2022').toDateString(),
			endDate: 'Present'
		}
	},
	{
		id: '/projects/bubbles',
		title: 'Bubbles',
		description:
			'It is a customer feedback and support platform designed to help businesses interact with their customers in a more personal and effective manner.',
		isFeature: true,
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		carousel: [''],
		company: COMPANIES.notchteam,
		thumbnail: BUBBLES_IMG,
		duration: {
			startDate: new Date('December 01, 2022').toDateString(),
			endDate: new Date('March 24, 2023').toDateString()
		}
	},
	{
		id: '/projects/tumble',
		title: 'Tumble',
		description:
			'Tumble is a smart laundry system and delivery platform, predictive maintenance and IoT technology with the lowest downtime in the business.',
		isFeature: false,
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		carousel: [],
		company: COMPANIES.righbalance,
		thumbnail: '',
		duration: {
			startDate: new Date('September 01, 2022').toDateString(),
			endDate: new Date('March 03, 2023').toDateString()
		}
	},
	{
		id: '/projects/tiled',
		title: 'Tiled',
		company: COMPANIES.zipdev,
		thumbnail: TILED_IMG,
		isFeature: true,
		description:
			'Tiled is a product that offers a customizable, collaborative workspace for teams to organize, prioritize, and track their work.',
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		duration: {
			startDate: new Date('July 01, 2022').toDateString(),
			endDate: new Date('January 10, 2023').toDateString()
		}
	},
	{
		id: '/projects/hoag',
		title: 'Hoag',
		company: COMPANIES.xteam,
		isFeature: false,
		description:
			'Hoag is a non-profit healthcare organization that operates hospitals and other healthcare facilities in Orange County, California.',
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		thumbnail: '',
		duration: {
			startDate: new Date('August 01, 2021').toDateString(),
			endDate: new Date('December 01, 2022').toDateString()
		}
	},
	{
		id: '/projects/cie-digital',
		title: 'CIE Digital',
		company: COMPANIES.xteam,
		isFeature: false,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		duration: {
			startDate: new Date('August 01, 2021').toDateString(),
			endDate: new Date('December 01, 2022').toDateString()
		},
		thumbnail: '',
		description:
			'Venture studio that serves as an innovation lab and accelerator for bold entrepreneurs who want to transform disruptive ideas into thriving ventures.'
	},
	{
		id: '/projects/ivy-cash',
		title: 'Ivy Cash',
		company: COMPANIES.xteam,
		isFeature: false,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		duration: {
			startDate: new Date('August 01, 2021').toDateString(),
			endDate: new Date('December 01, 2022').toDateString()
		},
		thumbnail: '',
		description:
			'IVY allows anyone with a smart phone and web browser to accept NFTs, and a basket of other tokens, just by scanning a QR code.'
	},
	{
		id: '/projects/xhq-platform',
		title: 'XHQ Platform',
		company: COMPANIES.xteam,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		isFeature: false,
		duration: {
			startDate: new Date('August 01, 2021').toDateString(),
			endDate: new Date('December 01, 2022').toDateString()
		},
		thumbnail: '',
		description:
			'XHQ Platform is a internal platform to manage teams, financial and cultural part of X-Team, you can generate insides and challenges.'
	},
	{
		id: '/projects/telus',
		title: 'Telus',
		company: COMPANIES.xteam,
		isFeature: false,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		duration: {
			startDate: new Date('August 01, 2021').toDateString(),
			endDate: new Date('December 01, 2022').toDateString()
		},
		thumbnail: '',
		description:
			'Telecommunications company that provides a wide range of communication and entertainment services to both residential and business customers. '
	},
	{
		id: '/projects/good-food-market',
		title: 'Good food Market',
		company: COMPANIES.xteam,
		isFeature: false,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		duration: {
			startDate: new Date('August 01, 2021').toDateString(),
			endDate: new Date('December 01, 2022').toDateString()
		},
		thumbnail: '',
		description:
			'Is a platform that offers meal kit delivery service based in Canada, a convenient way to eat well without sacrificing taste or quality.'
	},
	{
		id: '/projects/toro-investimentos',
		title: 'Toro',
		company: COMPANIES.toroinvestimentos,
		isFeature: false,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		duration: {
			startDate: new Date('April 01, 2021').toDateString(),
			endDate: new Date('July 01, 2021').toDateString()
		},
		thumbnail: '',
		description:
			'An investment platform based in Brazil that provides a comprehensive suite of investment services and tools for individuals and businesses.'
	},
	{
		id: '/projects/monetus',
		title: 'Monetus',
		company: COMPANIES.monetus,
		isFeature: false,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		thumbnail: '',
		duration: {
			startDate: new Date('November 01, 2020').toDateString(),
			endDate: new Date('July 01, 2021').toDateString()
		},
		description:
			'An investment platform based in Brazil that do all the job for their clients, auto investing based on AI that follows the user dreams.'
	},
	{
		id: '/projects/traders-club',
		title: 'Traders Club',
		company: COMPANIES.tradersclub,
		isFeature: false,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		thumbnail: '',
		duration: {
			startDate: new Date('November 01, 2020').toDateString(),
			endDate: new Date('July 01, 2021').toDateString()
		},
		description:
			'A community platform (Mobile & Web) for investor based in Brazil, you can follow the market, benchmark your investments.'
	},
	{
		id: '/projects/altoqi',
		title: 'AltoQI',
		company: COMPANIES.nkey,
		isFeature: false,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		thumbnail: '',
		duration: {
			startDate: new Date('November 01, 2020').toDateString(),
			endDate: new Date('July 01, 2021').toDateString()
		},
		description:
			"The company's suite of cloud-based software applications is designed to help organizations streamline and automate key business processes."
	},
	{
		id: '/projects/take',
		title: 'Take',
		company: COMPANIES.takeblip,
		isFeature: false,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		thumbnail: '',
		duration: {
			startDate: new Date('February 01, 2021').toDateString(),
			endDate: new Date('April 01, 2021').toDateString()
		},
		description:
			'A single platform with the best solutions to create conversations between companies and customers in the message channels.'
	},
	{
		id: '/projects/sherlock',
		title: 'Sherlock',
		company: COMPANIES.natahouse,
		isFeature: false,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		thumbnail: '',
		duration: {
			startDate: new Date('June 01, 2020').toDateString(),
			endDate: new Date('February 01, 2021').toDateString()
		},
		description:
			'A platform to go beyond the time in app & total logins, get clear understanding of the true engagement of your user base, lifeblood at your SaaS.'
	},
	{
		id: '/projects/videopeel',
		title: 'VideoPeel',
		company: COMPANIES.natahouse,
		isFeature: false,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		thumbnail: '',
		duration: {
			startDate: new Date('June 01, 2020').toDateString(),
			endDate: new Date('February 01, 2021').toDateString()
		},
		description:
			'Company that provides video marketing solutions for businesses, designed to help organizations create and manage video campaigns.'
	},
	{
		id: '/projects/resale',
		title: 'Resale',
		company: COMPANIES.natahouse,
		isFeature: false,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		thumbnail: '',
		duration: {
			startDate: new Date('June 01, 2020').toDateString(),
			endDate: new Date('February 01, 2021').toDateString()
		},
		description:
			'Real estate outlet based in Brazil, with solutions to facilitate access to properties repossessed with financing operations.'
	},
	{
		id: '/projects/elderly-health-care',
		title: 'Elderly Health Care',
		company: COMPANIES.fiocruz,
		isFeature: false,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		thumbnail: '',
		duration: {
			startDate: new Date('March 01, 2018').toDateString(),
			endDate: new Date('August 01, 2019').toDateString()
		},
		description:
			'A program from the Brazilian Government, it`s a part of the Modular Training Program in Health care for the elderly.'
	},
	{
		id: '/projects/unesco',
		title: 'Consultant',
		company: COMPANIES.unesco,
		isFeature: false,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		thumbnail: '',
		duration: {
			startDate: new Date('March 01, 2018').toDateString(),
			endDate: new Date('August 01, 2019').toDateString()
		},
		description:
			'Member of the technical committee for the creation of courses and digital educational resources and struct for the inside platform.'
	},
	{
		id: '/projects/educacao-livre',
		title: 'Educação Livre',
		company: COMPANIES.unesco,
		isFeature: false,
		carousel: [],
		skills: [
			SkillIcons.react,
			SkillIcons.redux,
			SkillIcons.aws,
			SkillIcons.typescript,
			SkillIcons.javascript
		],
		thumbnail: '',
		duration: {
			startDate: new Date('January 01, 2017').toDateString(),
			endDate: new Date('April 01, 2019').toDateString()
		},
		description:
			'A platform that offers free, fun and applied education to the real world, especially for young people looking for a work and study opportunities.'
	},
	{
		id: '/projects/hacker-rangers',
		title: 'Hacker',
		company: COMPANIES.perallis,
		isFeature: false,
		carousel: [],
		skills: [
			SkillIcons.react,
			SkillIcons.redux,
			SkillIcons.aws,
			SkillIcons.typescript,
			SkillIcons.javascript
		],
		thumbnail: '',
		duration: {
			startDate: new Date('April 01, 2019').toDateString(),
			endDate: new Date('September 01, 2019').toDateString()
		},
		description:
			'A platform that promotes corporate cyber security culture through gamification, to meet the requirements of the LGPD.'
	},
	{
		id: '/projects/ita-fest',
		title: 'Ita Fest',
		company: COMPANIES.fabricademvp,
		isFeature: false,
		carousel: [],
		skills: [
			SkillIcons.react,
			SkillIcons.reactNative,
			SkillIcons.firebase,
			SkillIcons.typescript,
			SkillIcons.javascript
		],
		thumbnail: '',
		duration: {
			startDate: new Date('March 01, 2018').toDateString(),
			endDate: new Date('June 01, 2020').toDateString()
		},
		description:
			'A personal project develop to help people from my city to find the best areas and more secure for the Carnival Festival in Brazil.'
	},
	{
		id: '/projects/gol-a-gol',
		title: 'Gol a Gol',
		company: COMPANIES.fabricademvp,
		isFeature: false,
		carousel: [],
		skills: [
			SkillIcons.react,
			SkillIcons.nodejs,
			SkillIcons.mongodb,
			SkillIcons.firebase,
			SkillIcons.reactNative,
			SkillIcons.eslint,
			SkillIcons.typescript,
			SkillIcons.javascript
		],
		thumbnail: '',
		duration: {
			startDate: new Date('March 01, 2018').toDateString(),
			endDate: new Date('June 01, 2019').toDateString()
		},
		description:
			'A platform that helps soccer fields owners to administrate to rent and create subscriptions for local teams and matchs.'
	}
]
