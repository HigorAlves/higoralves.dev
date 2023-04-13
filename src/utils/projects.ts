import BUBBLES_IMG from '~/assets/images/projects/bubbles/bubbles.png'
import SNAPSTRAT_IMG from '~/assets/images/projects/snapstrat/snapStrat.png'
import TILED_IMG from '~/assets/images/projects/tiled/tiled.png'
import { SkillIcons } from '~/components/Icons/SkillIcons'
import { ProjectType } from '~/types/projects'
import { COMPANIES } from '~/utils/companies'

export const PROJECTS: Array<ProjectType> = [
	{
		id: 'snapstrat',
		slug: '/projects/snapstrat',
		title: 'SnapStrat',
		thumbnail: SNAPSTRAT_IMG,
		description:
			'Empowers enterprises to improve the outcomes of their recurring strategic decisions through intelligent predictive, data-driven decision model.',
		about:
			'SnapStrat is a cutting-edge technology company that specializes in providing businesses with advanced analytics and decision-making tools. Founded in 2015, the company has quickly become a leader in the field of predictive analytics, helping companies to make better decisions, optimize their operations, and achieve their goals.\n' +
			'\n' +
			"SnapStrat's platform is designed to provide businesses with a comprehensive suite of tools that help them to better understand their customers, their operations, and the broader market. Using advanced machine learning algorithms and predictive models, the platform is able to analyze vast amounts of data, identify patterns and trends, and generate insights that can be used to drive better decision-making.\n" +
			'\n' +
			"One of the key advantages of SnapStrat's platform is its ability to be customized to meet the unique needs of each client. Whether a business is looking to optimize its pricing strategy, improve its supply chain operations, or better understand its customer base, SnapStrat's platform can be tailored to provide the insights and tools needed to achieve success.\n" +
			'\n' +
			'Overall, SnapStrat is a company that is at the forefront of the rapidly-evolving field of predictive analytics. With its cutting-edge technology, commitment to innovation, and focus on client success, it is a company that is well-positioned to help businesses of all sizes and industries achieve their goals.',
		isFeature: true,
		skills: [
			SkillIcons.auth0,
			SkillIcons.aws,
			SkillIcons.eslint,
			SkillIcons.git,
			SkillIcons.github,
			SkillIcons.graphql,
			SkillIcons.html,
			SkillIcons.jamstack,
			SkillIcons.javascript,
			SkillIcons.jest,
			SkillIcons.jira,
			SkillIcons.mui,
			SkillIcons.nodejs,
			SkillIcons.npm,
			SkillIcons.postman,
			SkillIcons.prettier,
			SkillIcons.react,
			SkillIcons.redux,
			SkillIcons.serverless,
			SkillIcons.typescript,
			SkillIcons.vite,
			SkillIcons.cypress,
			SkillIcons.circleci,
			SkillIcons.reacttestlibrary,
			SkillIcons.dynamo
		],
		carousel: [SNAPSTRAT_IMG],
		company: COMPANIES.zipdev,
		duration: {
			startDate: new Date('January 01, 2022').toDateString(),
			endDate: new Date('May 01, 2022').toDateString()
		}
	},
	{
		id: 'bubbles',
		slug: '/projects/bubbles',
		title: 'Bubbles',
		description:
			'It is a customer feedback and support platform designed to help businesses interact with their customers in a more personal and effective manner.',
		isFeature: true,
		about:
			'Bubbles is a revolutionary platform that enables businesses to communicate with their customers in a whole new way. Founded in 2019, the company has quickly established itself as a leader in the field of conversational commerce, helping businesses to connect with their customers and drive sales through interactive conversations.\n' +
			'\n' +
			'At its core, Bubbles is a messaging platform that allows businesses to engage with their customers in real-time, using a range of messaging channels including SMS, WhatsApp, and Facebook Messenger. The platform is designed to be easy to use, with intuitive drag-and-drop tools that allow businesses to create interactive conversations that are engaging, personalized, and effective.\n' +
			'\n' +
			'One of the key advantages of Bubbles is its ability to help businesses build stronger relationships with their customers. By engaging in personalized conversations with their customers, businesses are able to understand their needs, preferences, and pain points, and tailor their offerings accordingly. This leads to increased customer loyalty, higher customer satisfaction, and ultimately, increased revenue.\n' +
			'\n' +
			'Another advantage of Bubbles is its ability to help businesses automate their sales and marketing processes. By using intelligent chatbots, businesses are able to handle routine customer interactions, freeing up their staff to focus on higher-level tasks. This leads to increased efficiency, reduced costs, and improved customer experiences.\n' +
			'\n' +
			"Overall, Bubbles is a platform that is transforming the way businesses communicate with their customers. With its innovative approach to conversational commerce, intuitive tools, and focus on customer engagement, it is a platform that is well-positioned to help businesses of all sizes and industries achieve success in today's competitive market.",
		skills: [
			SkillIcons.aws,
			SkillIcons.serverless,
			SkillIcons.react,
			SkillIcons.nodejs,
			SkillIcons.typescript,
			SkillIcons.javascript,
			SkillIcons.git,
			SkillIcons.github,
			SkillIcons.jest,
			SkillIcons.reacttestlibrary,
			SkillIcons.cypress,
			SkillIcons.prettier,
			SkillIcons.eslint,
			SkillIcons.css,
			SkillIcons.npm,
			SkillIcons.dynamo,
			SkillIcons.netlify,
			SkillIcons.redux,
			SkillIcons.reduxsaga,
			SkillIcons.cognito
		],
		carousel: [],
		company: COMPANIES.notchteam,
		thumbnail: BUBBLES_IMG,
		duration: {
			startDate: new Date('December 01, 2022').toDateString(),
			endDate: new Date('March 24, 2023').toDateString()
		}
	},
	{
		id: 'tumble',
		slug: '/projects/tumble',
		title: 'Tumble',
		description:
			'Tumble is a smart laundry system and delivery platform, predictive maintenance and IoT technology with the lowest downtime in the business.',
		isFeature: false,
		about:
			'Tumble is a revolutionary smart laundry system that enables businesses to streamline their laundry operations and automate their processes. Founded in 2020, the company has quickly established itself as a leader in the field of laundry automation, helping businesses to reduce costs, increase efficiency, and improve customer satisfaction.\n' +
			'\n' +
			'At its core, Tumble is a laundry automation platform that allows businesses to automate their laundry operations and reduce manual effort. The platform is designed to be user-friendly, with intuitive tools that allow businesses to automate their laundry processes without the need for specialized technical skills.\n' +
			'\n' +
			'One of the key advantages of Tumble is its ability to help businesses reduce costs by eliminating manual effort. By automating routine tasks such as sorting, washing, and folding, businesses are able to free up their staff to focus on higher-level tasks, reducing the need for additional staff and increasing overall efficiency.\n' +
			'\n' +
			'Another advantage of Tumble is its ability to help businesses improve the quality of their laundry services. By providing a centralized platform for laundry management, businesses are able to ensure that all laundry items are washed according to their specific needs, resulting in cleaner and fresher laundry.\n' +
			'\n' +
			"Overall, Tumble is a platform that is transforming the way businesses manage their laundry operations. With its innovative approach to laundry automation, user-friendly tools, and focus on efficiency and quality, it is a platform that is well-positioned to help businesses of all sizes and industries achieve success in today's competitive market.",
		skills: [
			SkillIcons.typescript,
			SkillIcons.javascript,
			SkillIcons.nodejs,
			SkillIcons.aws,
			SkillIcons.serverless,
			SkillIcons.git,
			SkillIcons.github
		],
		carousel: [],
		company: COMPANIES.righbalance,
		thumbnail: '',
		duration: {
			startDate: new Date('September 01, 2022').toDateString(),
			endDate: new Date('March 03, 2023').toDateString()
		}
	},
	{
		id: 'tiled',
		slug: '/projects/tiled',
		title: 'Tiled',
		company: COMPANIES.zipdev,
		thumbnail: TILED_IMG,
		isFeature: true,
		about:
			'Tiled is a leading platform that enables businesses to create interactive, multimedia content that engages and informs their audience. Founded in 2016, the company has quickly established itself as a leader in the field of content marketing, helping businesses to create more effective and engaging content that drives results.\n' +
			'\n' +
			'At its core, Tiled is a content creation platform that allows businesses to easily create interactive, multimedia content such as presentations, infographics, and microsites. The platform is designed to be easy to use, with intuitive drag-and-drop tools that allow businesses to create content without the need for specialized technical skills.\n' +
			'\n' +
			'One of the key advantages of Tiled is its ability to help businesses create more engaging content that resonates with their audience. By creating interactive content that includes multimedia elements such as video, audio, and animations, businesses are able to capture the attention of their audience and keep them engaged for longer periods of time. This leads to increased brand awareness, higher engagement rates, and ultimately, increased revenue.\n' +
			'\n' +
			"Another advantage of Tiled is its ability to help businesses track and measure the effectiveness of their content. By providing detailed analytics on how their audience interacts with their content, businesses are able to gain valuable insights into what works and what doesn't, and adjust their strategy accordingly.\n" +
			'\n' +
			"Overall, Tiled is a platform that is transforming the way businesses create and deliver content. With its innovative approach to content marketing, intuitive tools, and focus on audience engagement, it is a platform that is well-positioned to help businesses of all sizes and industries achieve success in today's competitive market.",
		description:
			'Tiled is a product that offers a customizable, collaborative workspace for teams to organize, prioritize, and track their work.',
		carousel: [],
		skills: [
			SkillIcons.typescript,
			SkillIcons.javascript,
			SkillIcons.redux,
			SkillIcons.reduxsaga,
			SkillIcons.react,
			SkillIcons.nodejs,
			SkillIcons.git,
			SkillIcons.reacttestlibrary,
			SkillIcons.cypress,
			SkillIcons.prettier,
			SkillIcons.eslint,
			SkillIcons.css,
			SkillIcons.styledcomponents
		],
		duration: {
			startDate: new Date('July 01, 2022').toDateString(),
			endDate: new Date('January 10, 2023').toDateString()
		}
	},
	{
		id: 'hoag',
		slug: '/projects/hoag',
		title: 'Hoag',
		company: COMPANIES.xteam,
		isFeature: false,
		about: '',
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
		id: 'cie-digital',
		slug: '/projects/cie-digital',
		title: 'CIE Digital',
		company: COMPANIES.xteam,
		about: '',
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
		id: 'ivy-cash',
		slug: '/projects/ivy-cash',
		title: 'Ivy Cash',
		company: COMPANIES.xteam,
		about: '',
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
		id: 'xhq-platform',
		slug: '/projects/xhq-platform',
		title: 'XHQ Platform',
		company: COMPANIES.xteam,
		about: '',
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
		id: 'telus',
		slug: '/projects/telus',
		title: 'Telus',
		company: COMPANIES.xteam,
		about: '',
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
		id: 'good-food-market',
		slug: '/projects/good-food-market',
		title: 'Good food Market',
		company: COMPANIES.xteam,
		about: '',
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
		id: 'toro-investimentos',
		slug: '/projects/toro-investimentos',
		title: 'Toro',
		company: COMPANIES.toroinvestimentos,
		about: '',
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
		id: 'monetus',
		slug: '/projects/monetus',
		title: 'Monetus',
		company: COMPANIES.monetus,
		about: '',
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
		id: 'traders-club',
		slug: '/projects/traders-club',
		title: 'Traders Club',
		company: COMPANIES.tradersclub,
		about: '',
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
		id: 'altoqi',
		slug: '/projects/altoqi',
		title: 'AltoQI',
		company: COMPANIES.nkey,
		about: '',
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
		id: 'take',
		slug: '/projects/take',
		title: 'Take',
		company: COMPANIES.takeblip,
		about: '',
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
		id: 'sherlock',
		slug: '/projects/sherlock',
		title: 'Sherlock',
		company: COMPANIES.natahouse,
		about: '',
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
		id: 'videopeel',
		slug: '/projects/videopeel',
		title: 'VideoPeel',
		company: COMPANIES.natahouse,
		about: '',
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
		id: 'resale',
		slug: '/projects/resale',
		title: 'Resale',
		company: COMPANIES.natahouse,
		about: '',
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
		id: 'elderly-health-care',
		slug: '/projects/elderly-health-care',
		title: 'Elderly Health Care',
		company: COMPANIES.fiocruz,
		about: '',
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
		id: 'unesco',
		slug: '/projects/unesco',
		title: 'Consultant',
		company: COMPANIES.unesco,
		about: '',
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
		id: 'educacao-livre',
		slug: '/projects/educacao-livre',
		title: 'Educação Livre',
		company: COMPANIES.unesco,
		about: '',
		isFeature: false,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		thumbnail: '',
		duration: {
			startDate: new Date('January 01, 2017').toDateString(),
			endDate: new Date('April 01, 2019').toDateString()
		},
		description:
			'A platform that offers free, fun and applied education to the real world, especially for young people looking for a work and study opportunities.'
	},
	{
		id: 'hacker-rangers',
		slug: '/projects/hacker-rangers',
		title: 'Hacker',
		company: COMPANIES.perallis,
		about: '',
		isFeature: false,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		thumbnail: '',
		duration: {
			startDate: new Date('April 01, 2019').toDateString(),
			endDate: new Date('September 01, 2019').toDateString()
		},
		description:
			'A platform that promotes corporate cyber security culture through gamification, to meet the requirements of the LGPD.'
	},
	{
		id: 'ita-fest',
		slug: '/projects/ita-fest',
		title: 'Ita Fest',
		company: COMPANIES.fabricademvp,
		about: '',
		isFeature: false,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		thumbnail: '',
		duration: {
			startDate: new Date('March 01, 2018').toDateString(),
			endDate: new Date('June 01, 2020').toDateString()
		},
		description:
			'A personal project develop to help people from my city to find the best areas and more secure for the Carnival Festival in Brazil.'
	},
	{
		id: 'gol-a-gol',
		slug: '/projects/gol-a-gol',
		title: 'Gol a Gol',
		company: COMPANIES.fabricademvp,
		about: '',
		isFeature: false,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		thumbnail: '',
		duration: {
			startDate: new Date('March 01, 2018').toDateString(),
			endDate: new Date('June 01, 2019').toDateString()
		},
		description:
			'A platform that helps soccer fields owners to administrate to rent and create subscriptions for local teams and matchs.'
	}
]
