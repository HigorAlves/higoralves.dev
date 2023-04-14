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
		isFeature: true,
		carousel: [],
		company: COMPANIES.zipdev,
		duration: {
			startDate: new Date('January 01, 2022').toDateString(),
			endDate: new Date('May 01, 2022').toDateString()
		},
		description:
			'Empowers enterprises to improve the outcomes of their recurring strategic decisions through intelligent predictive, data-driven decision model.',
		about:
			"SnapStrat is a cutting-edge technology company that specializes in providing businesses with advanced analytics and decision-making tools. Founded in 2015, the company has quickly become a leader in the field of predictive analytics, helping companies to make better decisions, optimize their operations, and achieve their goals.\n\nSnapStrat's platform is designed to provide businesses with a comprehensive suite of tools that help them to better understand their customers, their operations, and the broader market. Using advanced machine learning algorithms and predictive models, the platform is able to analyze vast amounts of data, identify patterns and trends, and generate insights that can be used to drive better decision-making.\n\nOne of the key advantages of SnapStrat's platform is its ability to be customized to meet the unique needs of each client. Whether a business is looking to optimize its pricing strategy, improve its supply chain operations, or better understand its customer base, SnapStrat's platform can be tailored to provide the insights and tools needed to achieve success.\n\nOverall, SnapStrat is a company that is at the forefront of the rapidly-evolving field of predictive analytics. With its cutting-edge technology, commitment to innovation, and focus on client success, it is a company that is well-positioned to help businesses of all sizes and industries achieve their goals.",
		challenges:
			'Responsible for developing and maintaining key features in the platform, fixing performance issues, dealing with real-time data, large database processing and security, and I also ensured that the code standards were kept at a high level and that the development process was highly productive.',
		challengesPoints: [
			'Work closely with the development team to implement new features into our platform',
			'Identify and fix performance issues in the application',
			'Utilize JAM Stack and Serverless to build scalable and maintainable applications',
			'Deal with real-time data and video processing',
			'Ensure that the code standards for the project are followed',
			'Collaborate with designers and product owners to create seamless user experiences',
			'Continuously monitor and improve the performance of our platform',
			'Identify areas for improvement in the development process and provide recommendations for enhancements.'
		],
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
		]
	},
	{
		id: 'bubbles',
		slug: '/projects/bubbles',
		title: 'Bubbles',
		description:
			'It is a customer feedback and support platform designed to help businesses interact with their customers in a more personal and effective manner.',
		isFeature: true,
		company: COMPANIES.notchteam,
		thumbnail: BUBBLES_IMG,
		duration: {
			startDate: new Date('December 01, 2022').toDateString(),
			endDate: new Date('March 24, 2023').toDateString()
		},
		challenges:
			'Responsible for developing and maintaining key features in the platform, fixing performance issues, dealing with real-time data, video processing and security, and I also ensured that the code standards were kept at a high level and that the development process was highly productive.',
		challengesPoints: [
			'Work closely with the development team to implement new features into our platform',
			'Identify and fix performance issues in the application',
			'Utilize JAM Stack and Serverless to build scalable and maintainable applications',
			'Deal with real-time data and video processing',
			'Ensure that the code standards for the project are followed',
			'Collaborate with designers and product owners to create seamless user experiences',
			'Continuously monitor and improve the performance of our platform',
			'Identify areas for improvement in the development process and provide recommendations for enhancements.'
		],
		about:
			"Bubbles is a revolutionary platform that enables businesses to communicate with their customers in a whole new way. Founded in 2019, the company has quickly established itself as a leader in the field of conversational commerce, helping businesses to connect with their customers and drive sales through interactive conversations.\nAt its core, Bubbles is a messaging platform that allows businesses to engage with their customers in real-time, using a range of messaging channels including SMS, WhatsApp, and Facebook Messenger. The platform is designed to be easy to use, with intuitive drag-and-drop tools that allow businesses to create interactive conversations that are engaging, personalized, and effective.\n\nOne of the key advantages of Bubbles is its ability to help businesses build stronger relationships with their customers. By engaging in personalized conversations with their customers, businesses are able to understand their needs, preferences, and pain points, and tailor their offerings accordingly. This leads to increased customer loyalty, higher customer satisfaction, and ultimately, increased revenue.\n\nAnother advantage of Bubbles is its ability to help businesses automate their sales and marketing processes. By using intelligent chatbots, businesses are able to handle routine customer interactions, freeing up their staff to focus on higher-level tasks. This leads to increased efficiency, reduced costs, and improved customer experiences.\n\nOverall, Bubbles is a platform that is transforming the way businesses communicate with their customers. With its innovative approach to conversational commerce, intuitive tools, and focus on customer engagement, it is a platform that is well-positioned to help businesses of all sizes and industries achieve success in today's competitive market.",
		carousel: [],
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
		]
	},
	{
		id: 'tumble',
		slug: '/projects/tumble',
		title: 'Tumble',
		description:
			'Tumble is a smart laundry system and delivery platform, predictive maintenance and IoT technology with the lowest downtime in the business.',
		isFeature: false,
		company: COMPANIES.righbalance,
		thumbnail: '',
		duration: {
			startDate: new Date('September 01, 2022').toDateString(),
			endDate: new Date('March 03, 2023').toDateString()
		},
		about:
			"Tumble is a revolutionary smart laundry system that enables businesses to streamline their laundry operations and automate their processes. Founded in 2020, the company has quickly established itself as a leader in the field of laundry automation, helping businesses to reduce costs, increase efficiency, and improve customer satisfaction.\nAt its core, Tumble is a laundry automation platform that allows businesses to automate their laundry operations and reduce manual effort. The platform is designed to be user-friendly, with intuitive tools that allow businesses to automate their laundry processes without the need for specialized technical skills.\nOne of the key advantages of Tumble is its ability to help businesses reduce costs by eliminating manual effort. By automating routine tasks such as sorting, washing, and folding, businesses are able to free up their staff to focus on higher-level tasks, reducing the need for additional staff and increasing overall efficiency.\nAnother advantage of Tumble is its ability to help businesses improve the quality of their laundry services. By providing a centralized platform for laundry management, businesses are able to ensure that all laundry items are washed according to their specific needs, resulting in cleaner and fresher laundry.\nOverall, Tumble is a platform that is transforming the way businesses manage their laundry operations. With its innovative approach to laundry automation, user-friendly tools, and focus on efficiency and quality, it is a platform that is well-positioned to help businesses of all sizes and industries achieve success in today's competitive market.",
		challenges:
			'I was responsible for developing and maintaining IoT, frontend, and backend applications using the JamStack and serverless architecture. I also ensured that the code standards were kept at a high level and that the development process was highly productive. Additionally, I worked with real-time databases and data using tools to maintain performance and security within the platform and IoT devices',
		challengesPoints: [
			'Develop and maintain IoT, frontend, and backend applications using the JamStack and serverless architecture.',
			'Collaborate with the team to ensure that the code standards are high and that the development process is highly productive.',
			'Work with real-time databases and data using tools to maintain performance and security within the platform and IoT devices.',
			'Ensure that the development process adheres to best practices, including Agile methodologies, code reviews, and automated testing.',
			'Identify areas for improvement in the development process and provide recommendations for enhancements.',
			'Collaborate with cross-functional teams to ensure the platform and IoT devices meet the requirements and provide an exceptional user experience.',
			'Stay up-to-date with the latest industry trends, technologies, and best practices in software engineering, IoT, and serverless architecture.'
		],
		carousel: [],
		skills: [
			SkillIcons.typescript,
			SkillIcons.javascript,
			SkillIcons.nodejs,
			SkillIcons.aws,
			SkillIcons.serverless,
			SkillIcons.git,
			SkillIcons.github,
			SkillIcons.vue,
			SkillIcons.pm2,
			SkillIcons.circleci
		]
	},
	{
		id: 'tiled',
		slug: '/projects/tiled',
		title: 'Tiled',
		company: COMPANIES.zipdev,
		thumbnail: TILED_IMG,
		isFeature: true,
		about:
			"Tiled is a leading platform that enables businesses to create interactive, multimedia content that engages and informs their audience. Founded in 2016, the company has quickly established itself as a leader in the field of content marketing, helping businesses to create more effective and engaging content that drives results.\nAt its core, Tiled is a content creation platform that allows businesses to easily create interactive, multimedia content such as presentations, infographics, and microsites. The platform is designed to be easy to use, with intuitive drag-and-drop tools that allow businesses to create content without the need for specialized technical skills.\nOne of the key advantages of Tiled is its ability to help businesses create more engaging content that resonates with their audience. By creating interactive content that includes multimedia elements such as video, audio, and animations, businesses are able to capture the attention of their audience and keep them engaged for longer periods of time. This leads to increased brand awareness, higher engagement rates, and ultimately, increased revenue.\nAnother advantage of Tiled is its ability to help businesses track and measure the effectiveness of their content. By providing detailed analytics on how their audience interacts with their content, businesses are able to gain valuable insights into what works and what doesn't, and adjust their strategy accordingly.\nOverall, Tiled is a platform that is transforming the way businesses create and deliver content. With its innovative approach to content marketing, intuitive tools, and focus on audience engagement, it is a platform that is well-positioned to help businesses of all sizes and industries achieve success in today's competitive market.",
		description:
			'Tiled is a product that offers a customizable, collaborative workspace for teams to organize, prioritize, and track their work.',
		carousel: [],
		challenges:
			"I worked to increase the application's performance, implementing a range of optimizations and enhancements to ensure that it ran smoothly and efficiently. This involved fine-tuning the application's code, identifying and resolving performance bottlenecks, and implementing performance benchmarks to track progress and identify areas for further improvement.",
		challengesPoints: [
			'Successfully improved the accessibility features, making the platform more user-friendly and accessible to a wider range of users',
			"Implemented a range of optimizations and enhancements to increase the application's performance, including fine-tuning the code, identifying and resolving performance bottlenecks, and implementing performance benchmarks",
			'Played a key role in improving the security of the application, reducing the risk of security failures and enhancing its stack security',
			'Created engaging and effective mobile animations that helped to bring the application to life and enhance its overall appeal',
			'Strong problem-solving and analytical skills, with a focus on identifying and resolving complex technical issues',
			'Collaborative team player with excellent communication and interpersonal skills',
			'Committed to staying up-to-date with the latest industry trends and best practices to ensure that projects are completed to the highest standards.'
		],
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
		about:
			"Hoag is a non-profit health care organization based in Newport Beach, California, with facilities throughout Orange County. The organization is dedicated to providing high-quality, patient-centered care across a range of specialties, from cancer and heart health to women's health and orthopedics.\nWith a history dating back more than 70 years, Hoag has built a reputation for excellence in patient care, research, and education. The organization's team of physicians, nurses, and other health care professionals are committed to providing the best possible care to patients, using the latest techniques and technologies to deliver optimal outcomes.\nHoag is also dedicated to advancing the field of health care through cutting-edge research and education initiatives. The organization collaborates with academic institutions and other health care providers to develop and share best practices, and is recognized as a leader in clinical research and innovation.\nAbove all, Hoag is driven by its mission to provide the highest-quality care to patients, and to improve the health and well-being of the communities it serves. The organization is committed to meeting the evolving needs of patients and families, and to delivering compassionate, personalized care that puts patients first.",
		challenges:
			"One of my primary responsibilities was to create a responsive and user-friendly platform that showcased the organization's services and expertise. I collaborated with designers and other developers to create a cohesive and visually appealing that was optimized for mobile devices.Led the development of the Hoag mobile app, working closely with stakeholders to identify key goals and requirements",
		challengesPoints: [
			'Led the development of the Hoag mobile app, working closely with stakeholders to identify key goals and requirements',
			'Utilized a range of programming languages and frameworks, including [list relevant technologies here], to create a robust and scalable mobile app architecture',
			'Worked closely with designers and other developers to create a cohesive and visually appealing mobile app design that was optimized for both iOS and Android platforms',
			'Implemented a range of performance optimizations and enhancements to ensure that the mobile app loaded quickly and ran smoothly',
			'Enhanced the security of the mobile app, implementing measures to protect against threats and vulnerabilities and reduce the risk of security failures',
			'Collaborated with cross-functional teams to ensure that the mobile app integrated seamlessly with other Hoag systems and services',
			'Conducted extensive testing and quality assurance checks to ensure that the mobile app met high standards of reliability and usability',
			'Developed new features and functionality for the mobile app, based on user feedback and evolving business needs',
			'Provided technical leadership and mentorship to other developers, helping to build a strong and collaborative team culture',
			'Committed to staying up-to-date with the latest industry trends and best practices to ensure that the mobile app was completed to the highest standards.'
		],
		description:
			'Hoag is a non-profit healthcare organization that operates hospitals and other healthcare facilities in Orange County, California.',
		carousel: [],
		skills: [
			SkillIcons.typescript,
			SkillIcons.javascript,
			SkillIcons.react,
			SkillIcons.nodejs,
			SkillIcons.styledcomponents,
			SkillIcons.redux,
			SkillIcons.reduxsaga,
			SkillIcons.figma,
			SkillIcons.firebase,
			SkillIcons.github,
			SkillIcons.googleanalytics,
			SkillIcons.jest,
			SkillIcons.mongodb
		],
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
		about:
			'Cie Digital Labs is a global innovation accelerator that helps businesses across a range of industries to transform and grow through the power of technology. With a focus on delivering cutting-edge digital solutions, the organization offers a range of services, including strategic consulting, software development, and digital marketing.\nAt Cie Digital Labs, the team is dedicated to creating impactful and innovative solutions that help their clients stay ahead of the curve in an ever-evolving digital landscape. With a commitment to building long-term partnerships with their clients, Cie Digital Labs offers a collaborative and consultative approach to solving complex business challenges.',
		isFeature: false,
		carousel: [],
		skills: [SkillIcons.typescript, SkillIcons.javascript],
		duration: {
			startDate: new Date('August 01, 2021').toDateString(),
			endDate: new Date('December 01, 2022').toDateString()
		},
		thumbnail: '',
		challenges:
			"Overall, my contributions to the development of ciedigital.com were instrumental in creating a website that effectively showcased the organization's services and expertise, while also delivering a responsive and user-friendly experience to visitors. In addition to my work on the website's design and functionality, I implemented a range of performance optimizations and enhancements to ensure that the website loaded quickly and ran smoothly. This included fine-tuning the website's code, identifying and resolving performance bottlenecks, and implementing performance benchmarks to track progress and identify areas for further improvement.",
		challengesPoints: [
			'Led the development of the ciedigital.com website, working closely with stakeholders to identify key goals and requirements',
			"Created a responsive and user-friendly website design that effectively showcased the organization's services and expertise",
			'Implemented a range of performance optimizations and enhancements to ensure that the website loaded quickly and ran smoothly',
			'Enhanced the security of the website, implementing measures to protect against threats and vulnerabilities and reduce the risk of security failures',
			'Collaborated with cross-functional teams to ensure that the website integrated seamlessly with other Cie Digital Labs systems and services',
			'Conducted extensive testing and quality assurance checks to ensure that the website met high standards of reliability and usability',
			'Developed new features and functionality for the website, based on user feedback and evolving business needs',
			'Provided technical leadership and mentorship to other developers, helping to build a strong and collaborative team culture',
			'Committed to staying up-to-date with the latest industry trends and best practices to ensure that the website was completed to the highest standards.'
		],
		description:
			'Venture studio that serves as an innovation lab and accelerator for bold entrepreneurs who want to transform disruptive ideas into thriving ventures.'
	},
	{
		id: 'ivy-cash',
		slug: '/projects/ivy-cash',
		title: 'Ivy Cash',
		company: COMPANIES.xteam,
		about:
			'Ivy.cash is a fintech startup that is revolutionizing the way people manage their finances. With a focus on simplicity, accessibility, and transparency, the organization offers a range of financial services through its mobile app, including banking, investing, and budgeting tools.\nAt Ivy.cash, the team is dedicated to empowering users to take control of their finances and achieve their financial goals. With a user-centric approach to product development, Ivy.cash is committed to delivering innovative solutions that meet the evolving needs of its customers, and help them to build a stronger financial future.\nFounded in 2018, Ivy.cash has quickly grown to become a leading player in the fintech space, with a team of experienced professionals located around the globe. The organization has a proven track record of delivering high-quality financial products and services to users, and is committed to leveraging the latest technologies to drive innovation and growth.\nWith a focus on simplicity, accessibility, and transparency, Ivy.cash is committed to making finance more approachable and less intimidating for users, and helping them to achieve their financial goals with confidence and ease.',
		isFeature: false,
		carousel: [],
		challenges:
			"I was responsible for designing and implementing new features for the organization's mobile app and backend systems. This included collaborating with cross-functional teams to understand business requirements, and developing innovative solutions that met the needs of both users and the organization.\nMy primary responsibilities included developing and maintaining high-quality code for the mobile app and backend systems, as well as identifying and resolving performance issues and bugs. I was also responsible for mentoring other developers on the team, helping to build a strong and collaborative engineering culture.",
		challengesPoints: [
			"Spearheaded the development of Ethereum smart contracts to support the organization's blockchain-based financial services offerings.",
			'Developed and maintained the Ivy.cash mobile app and backend systems, including implementing new features and functionality using Ethereum blockchain technology.',
			"Collaborated with cross-functional teams to design and develop innovative solutions that leveraged Ethereum blockchain technology to enhance the organization's financial services offerings.",
			"Conducted research and analysis to identify emerging trends in Ethereum blockchain development, and leveraged this knowledge to drive innovation and improve the organization's products and services.",
			'Mentored and trained junior developers on Ethereum blockchain development best practices, helping to build a strong and collaborative engineering culture.',
			'Designed and implemented automated testing processes to ensure the quality and reliability of Ethereum smart contracts and other blockchain-based applications.',
			"Played a key role in the development of the organization's overall blockchain strategy, including identifying opportunities to leverage Ethereum technology to drive growth and innovation.",
			'The implementation of a new feature for the mobile app that allowed users to easily track their financial transactions and manage their accounts.',
			'The development of a new API for the backend system, which helped to improve performance and scalability.',
			'The implementation of new security measures, including enhanced encryption and authentication protocols, to protect user data and reduce the risk of security failures.',
			'The development of new automated testing processes, which helped to improve the efficiency and accuracy of the testing process and reduce the risk of bugs and performance issues.'
		],
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
		about:
			"Since 2006, X-Team has provided high-performing, on-demand teams of software developers for the world's leading brands.\nWe are leaders in the remote work movement, and believe in building a world where developers can have access to an environment of growth and incredible opportunities regardless of where they live.\nWe're a community of developers from 75+ countries around the world. We’ve fostered a unique, active lifestyle and culture around learning, growing and exploring that continues to attract thousands of developers to apply every day.\nWe proactively support our developers, fund their learning and growth, connect them in roaming hacker houses around the world, and give them a remote environment that motivates and inspires them on a daily basis. While other companies merely place and drop their talent, we provide unified teams of developers centered around the same beliefs, values, and lifestyle. \nWe're uniquely situated to help shape how companies grow their businesses in the digital age and aid them in being able to do so properly with the right people. We work with big, innovative brands like Riot Games, Fox Broadcasting, Kaplan Inc., Coinbase, Google, Sony, Twitter, Beachbody and more…",
		carousel: [],
		challenges:
			"I worked on various projects to help big companies like Riot Games, Adidas, Twitter, Google, etc. I was responsible for ensuring web and mobile applications' performance, security, and scalability by implementing best coding practices and using performance and security tools to check the engineering process.",
		challengesPoints: [
			'Develop UI and UX experiences with the design and product team to create high-quality, user-friendly web and mobile applications.',
			'Work on various projects and help big companies like Riot Games, Adidas, Twitter, Google, etc. to build high-performance web and mobile applications using the Jam Stack.',
			"Ensure web and mobile applications' performance, security, and scalability by implementing best coding practices and using performance and security tools to check the engineering process.",
			'Work with the engineering team to resolve front-end, back-end, and mobile performance issues.',
			'Collaborate with the design and product team to ensure the applications meet the requirements and provide an exceptional user experience.',
			'Stay up-to-date with the latest industry trends, technologies, and best practices in Jam Stack development.',
			'Participate in code reviews to ensure the codebase is high quality and follows the best practices.'
		],
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
		about:
			'TELUS is a Canadian telecommunications company that provides a wide range of communication and entertainment services to customers across the country. The company offers mobile, internet, television, and home phone services, as well as a range of healthcare and security solutions.\nIs also committed to making a positive impact in the communities it serves, through initiatives that support environmental sustainability, community development, and social innovation. The company has been recognized as a leader in corporate social responsibility, and has been named to the Dow Jones Sustainability World Index for several consecutive years.',
		challenges:
			"At TELUS, I had the opportunity to work on a wide range of complex software development projects, leveraging the latest technologies to drive innovation and improve the company's products and services. \nIt was an incredibly rewarding experience, and I was proud to be part of a team that was dedicated to delivering exceptional products and services to customers across Canada. I gained valuable experience in managing complex software projects, developing innovative solutions, and collaborating with cross-functional teams, and I look forward to applying this experience in my future endeavors.",
		challengesPoints: [
			"Developing and implementing innovative solutions to improve the reliability and scalability of TELUS's complex telecommunications infrastructure.",
			"Working with a wide range of stakeholders to develop new products and services that meet the evolving needs of TELUS's customers, while ensuring that these solutions are technically feasible and align with the company's overall strategic goals.",
			"Staying up-to-date with the latest technologies and industry trends, and determining how to leverage these to drive innovation and improve TELUS's products and services.",
			"Collaborating with cross-functional teams to develop and implement new software solutions that support TELUS's healthcare and security offerings.",
			'Managing complex software development projects with multiple stakeholders, and ensuring that they are completed on-time and within budget.',
			"Identifying and addressing technical challenges related to the integration of TELUS's various products and services, and ensuring that they work seamlessly together.",
			'Leading and mentoring junior software engineers, and helping to build a strong and collaborative engineering culture within TELUS.'
		],
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
		about:
			"Make Good Food is a Canadian meal-kit company that offers a range of delicious, easy-to-prepare meals for customers across the country. The company is committed to using fresh, high-quality ingredients and offering a wide range of meal options to meet the diverse dietary needs of its customers. Make Good Food's mission is to make healthy eating easy and accessible for everyone, and to inspire people to try new and exciting flavors from around the world.",
		challenges:
			'I was part of a dynamic and innovative team that is dedicated to improving the way people eat and making healthy, delicious meals accessible to everyone. Whether you are passionate about e-commerce, mobile development, or software engineering in general, Make Good Food offers a unique and exciting opportunity to make a real impact in a rapidly growing industry.',
		challengesPoints: [
			'Developing and implementing new software solutions that improve the customer experience, such as personalized recommendations, meal planning tools, and recipe suggestions.',
			"Collaborating with cross-functional teams to develop and maintain Make Good Food's e-commerce platform, ensuring that it is always up-to-date and optimized for a seamless user experience.",
			"Building and maintaining Make Good Food's mobile applications, allowing customers to easily browse and order meals from their smartphones or tablets.",
			"Developing and implementing new features and functionality that support the company's growth, such as new payment options, subscription plans, and loyalty programs.",
			"Staying up-to-date with the latest technologies and industry trends, and using this knowledge to drive innovation and improve Make Good Food's software development capabilities.",
			'Mentoring junior software engineers and helping to build a strong and collaborative engineering culture within the company.'
		],
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
		about:
			'Toro Investimentos is a leading Brazilian investment platform that provides a range of financial products and services to help customers achieve their investment goals. The company offers a wide range of investment options, including stocks, funds, and ETFs, and is committed to providing easy-to-use tools and resources to help customers make informed investment decisions.',
		challenges:
			'As a Software Engineer Leader at one of the biggest stock exchange companies, I led a team of software engineers and worked on critical internal systems. I used my expertise in React, Flutter, and serverless to guide our team and help the company make important decisions while ensuring that all work is done in compliance with regulations. I also need to deeply understand JavaScript, Frontend performance, and serverless architectures.',
		challengesPoints: [
			'Led a team of software engineers to develop and maintain internal systems using React, Flutter, and serverless technologies',
			'Ensure that all work is done in compliance with regulations and company standards',
			'Work closely with other departments to understand their needs and develop solutions that meet those needs',
			'Use my expertise in JavaScript and Frontend performance to optimize and improve the efficiency of internal systems',
			'Maintain and improve existing systems while also developing new systems and features as needed',
			'Stay up-to-date with the latest trends and technologies in software development and share your knowledge with the team',
			'Collaborate with other software engineers and architects to design and implement effective solutions',
			'Provide technical guidance and leadership to the team',
			'Help the company make important decisions related to software development and technology adoption'
		],
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
		about:
			"Monetus is redefining investing in Brazil. Combining state of the art technology, design and data, Monetus offers an incredible investment experience — one that's simple, profitable and secure. For everyone.  Located in San Pedro Valley, one of the leading startups ecosystems in Latin America, Monetus has raised investments from some of Brazil's most prominent financial market executives.  Using principles of behavioral economics, modern portfolio theory and machine learning, topped off by an amazing customer experience, we build a diversified investment portfolio on your behalf and guide you to achieving your financial goals much faster.",
		challenges:
			'I worked with a passionate team to help people achieve financial goals by investing and managing their money effectively. I was responsible for upgrading legacy code to improve performance and accessibility using the JAM stack, React, and React Native. My collaboration with the product and design team ensured that our software met the needs of our customers and exceeded their expectations.',
		challengesPoints: [
			'Upgrade legacy code to modern web standards to ensure scalability and maintainability',
			'Work with the product and design team to deliver features that meet customer needs and exceed expectations',
			'Develop, test, and deploy high-quality web applications and mobile applications using the JAM stack, React, and React Native',
			'Ensure code quality through code reviews and testing',
			'Collaborate with other engineers, designers, and product managers to deliver projects on time and within budget',
			'Continuously improve our software development process by identifying areas for improvement and implementing changes',
			'Stay up-to-date with the latest web development trends and technologies and recommend improvements to the development process',
			'Work with the finance team to ensure compliance with industry regulations and standards',
			'Monitor application performance and troubleshoot issues to ensure high availability and scalability'
		],
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
		about:
			'TC (formerly known as TC Mover) is a leading Brazilian financial news and analysis platform that provides real-time information and insights to help investors make informed decisions. The company is committed to delivering high-quality financial news and data through its innovative digital platform, which includes real-time news feeds, market analysis, and a range of financial tools and resources.',
		challenges:
			'At TC, I was able to be part of a dynamic and innovative team that is dedicated to delivering high-quality financial news and data to investors across Brazil. Whether you are passionate about financial technology, mobile development, or software engineering in general, TC offers a unique and exciting opportunity to make a real impact in the rapidly evolving world of financial services.',
		challengesPoints: [
			'Developing and implementing new software solutions that improve the customer experience, such as personalized news feeds, market analysis tools, and real-time financial data visualization.',
			"Collaborating with cross-functional teams to develop and maintain TC's digital platform, ensuring that it is always up-to-date and optimized for a seamless user experience.",
			"Building and maintaining TC's mobile applications, allowing customers to easily access and manage their financial news and data from their smartphones or tablets.",
			"Developing and implementing new features and functionality that support the company's growth, such as new financial products and services, and expansion into new markets.",
			"Staying up-to-date with the latest technologies and industry trends, and using this knowledge to drive innovation and improve TC's software development capabilities.",
			'Mentoring junior software engineers and helping to build a strong and collaborative engineering culture within the company.'
		],
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
		about:
			'AltoQi is a leading Brazilian software company that specializes in the development of engineering software solutions for the construction industry. The company provides a range of products and services that help architects, engineers, and construction professionals to streamline their workflows, increase productivity, and deliver high-quality projects on time and on budget.',
		challenges:
			'I was part of a dynamic and innovative team that is dedicated to delivering high-quality software solutions to the construction industry in Brazil and beyond. Whether you are passionate about software engineering, construction technology, or the intersection of both, AltoQi offers a unique and exciting opportunity to make a real impact in this rapidly evolving field.',
		challengesPoints: [
			'Developing and implementing new software solutions that improve the design and construction process, such as building information modeling (BIM) tools, project management software, and energy efficiency analysis software.',
			"Collaborating with cross-functional teams to develop and maintain AltoQi's software products, ensuring that they are always up-to-date and optimized for a seamless user experience.",
			"Building and maintaining AltoQi's mobile applications, allowing customers to easily access and manage their projects from their smartphones or tablets.",
			"Developing and implementing new features and functionality that support the company's growth, such as new engineering products and services, and expansion into new markets.",
			"Staying up-to-date with the latest technologies and industry trends, and using this knowledge to drive innovation and improve AltoQi's software development capabilities.",
			'Mentoring junior software engineers and helping to build a strong and collaborative engineering culture within the company.'
		],
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
		title: 'Take Blip',
		company: COMPANIES.takeblip,
		about:
			"Take is a leading Brazilian company that specializes in the development of communication software solutions. With a focus on providing powerful and easy-to-use tools for businesses of all sizes, Take's products and services help companies to improve customer engagement, streamline workflows, and drive growth.",
		challenges:
			'I was part of a dynamic and innovative team that is dedicated to delivering high-quality software solutions to businesses in Brazil and beyond. Whether you are passionate about software engineering, communication technology, or the intersection of both, Take offers a unique and exciting opportunity to make a real impact in this rapidly evolving field.',
		challengesPoints: [
			'Developing and implementing new communication solutions that improve the customer experience, such as chatbots, SMS messaging, and voice assistants.',
			"Collaborating with cross-functional teams to develop and maintain Take's software products, ensuring that they are always up-to-date and optimized for a seamless user experience.",
			"Building and maintaining Take's mobile applications, allowing customers to easily access and manage their communication channels from their smartphones or tablets.",
			"Developing and implementing new features and functionality that support the company's growth, such as new communication products and services, and expansion into new markets.",
			"Staying up-to-date with the latest technologies and industry trends, and using this knowledge to drive innovation and improve Take's software development capabilities.",
			'Mentoring junior software engineers and helping to build a strong and collaborative engineering culture within the company.'
		],
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
		about:
			'Sherlock Score is a technology company that specializes in fraud detection and prevention. The company offers a range of innovative solutions to help businesses of all sizes to identify and mitigate fraud risks, protecting them from financial losses and reputational damage.',
		challenges:
			'I was part of a dynamic and innovative team that is dedicated to helping businesses to fight fraud and protect themselves from financial losses. Whether you are passionate about software engineering, machine learning, or fraud prevention, Sherlock Score offers a unique and exciting opportunity to make a real impact in this important field.',
		challengesPoints: [
			'Developing new algorithms and machine learning models to improve fraud detection accuracy and reduce false positives.',
			"Collaborating with cross-functional teams to integrate Sherlock Score's solutions into customer workflows, ensuring a seamless user experience.",
			"Building and maintaining Sherlock Score's web and mobile applications, allowing customers to easily access and manage their fraud prevention tools.",
			"Developing and implementing new features and functionality that support the company's growth, such as new fraud prevention products and services, and expansion into new markets.",
			"Staying up-to-date with the latest technologies and industry trends, and using this knowledge to drive innovation and improve Sherlock Score's software development capabilities.",
			'Mentoring junior software engineers and helping to build a strong and collaborative engineering culture within the company.'
		],
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
		about:
			"VideoPeel is a leading platform for user-generated video marketing. The company's innovative software allows businesses of all sizes to collect and curate authentic video content from their customers, employees, and other stakeholders, and use it to enhance their marketing campaigns.",
		challenges:
			"I was  responsible for developing and maintaining the company's cutting-edge platform, which incorporates a range of technologies such as machine learning, video analysis, and cloud computing. You would work closely with cross-functional teams, including product managers, designers, and other engineers, to build and enhance the platform's capabilities.",
		challengesPoints: [
			'Developing new algorithms and machine learning models to analyze user-generated video content, and automatically categorize and curate it for use in marketing campaigns.',
			"Building and maintaining the company's web and mobile applications, which allow customers to easily upload, manage, and share their video content.",
			'Developing new features and functionality that help businesses to get the most out of their user-generated video content, such as automated video editing tools, advanced analytics and reporting, and integration with social media platforms.',
			"Staying up-to-date with the latest video technologies and industry trends, and using this knowledge to drive innovation and improve VideoPeel's software development capabilities.",
			'Mentoring junior software engineers and helping to build a strong and collaborative engineering culture within the company.'
		],
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
		about:
			'Resale is a leading online platform for buying and selling used and refurbished goods in Brazil. The platform allows consumers to easily search for and purchase high-quality secondhand items across a wide range of categories, from electronics and home appliances.',
		challenges:
			'I was part of a dynamic and fast-growing team that is dedicated to making it easier and more affordable for consumers to buy and sell used and refurbished goods. If you are passionate about e-commerce, machine learning, and improving the customer experience, Resale.com.br offers an exciting opportunity to work on cutting-edge projects and make a real impact in this exciting and rapidly-evolving industry.',
		challengesPoints: [
			'Developing and implementing new machine learning models to automatically classify and categorize products based on their attributes and features, and improve search and recommendation algorithms.',
			"Building and maintaining the company's web and mobile applications, which allow customers to easily browse and purchase products from their smartphones and tablets.",
			'Developing new features and functionality that improve the customer experience, such as real-time chat support, social media integration, and personalized product recommendations.',
			"Staying up-to-date with the latest e-commerce technologies and trends, and using this knowledge to drive innovation and improve Resale.com.br's software development capabilities.",
			'Mentoring junior software engineers and helping to build a strong and collaborative engineering culture within the company.'
		],
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
		about:
			'FioCruz, also known as the Oswaldo Cruz Foundation, is a world-renowned Brazilian public health research institution, dedicated to promoting health, science, and technology through innovative research, education, and public policies. With a history spanning more than 120 years, FioCruz has played a critical role in advancing public health in Brazil and beyond, developing new treatments and vaccines, and contributing to the understanding of infectious diseases, environmental health, and other important health issues.',
		challenges:
			'I had  opportunity to work on a wide range of cutting-edge projects that leverage advanced technologies such as machine learning, big data, and cloud computing to address some of the most pressing public health challenges of our time. Part of a dynamic and mission-driven team that is dedicated to advancing public health and promoting social justice through cutting-edge research, innovation, and education. If you are passionate about using technology to make a positive impact on society, FioCruz offers an exciting opportunity to work on meaningful projects and contribute to a healthier and more equitable future for all.',
		challengesPoints: [
			'Developing new software tools and platforms to support research and innovation in public health, such as data analytics and visualization tools, mobile health applications, and advanced simulation models.',
			'Collaborating with researchers and public health experts to design and implement innovative research studies that use technology to improve health outcomes and reduce disease transmission.',
			'Participating in cross-functional teams to develop new vaccines, drugs, and diagnostic tests for a wide range of infectious diseases and other health issues.',
			'Contributing to the development and implementation of public health policies and interventions, using data-driven insights and innovative technology solutions to improve health outcomes for communities across Brazil and beyond.',
			'Mentoring and coaching junior software engineers and contributing to the development of a strong and collaborative engineering culture within the organization.'
		],
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
		about:
			'UNESCO, or the United Nations Educational, Scientific and Cultural Organization, is a specialized agency of the United Nations (UN) that was established in 1945 with a mission to promote international cooperation in education, science, culture, and communication. UNESCO works to advance human rights and social justice through education, scientific research, and cultural preservation and exchange.',
		challenges:
			'I had  the opportunity to work on a range of innovative projects aimed at promoting sustainable development, fostering intercultural dialogue, and advancing human rights and social justice. Be part of a dynamic and mission-driven team that is dedicated to advancing human rights and social justice through education, science, and culture. If you are passionate about using technology to promote global development and social change, UNESCO offers an exciting opportunity to work on meaningful projects and contribute to a more just and inclusive world for all.',
		challengesPoints: [
			'Developing new software platforms and tools to support open and collaborative learning, such as online learning communities, educational games, and interactive multimedia resources.',
			'Designing and implementing innovative educational programs and curricula that promote peace, human rights, and intercultural understanding, with a focus on empowering marginalized and vulnerable communities.',
			'Collaborating with scientists and researchers to address global challenges such as climate change, biodiversity loss, and infectious diseases, and to develop evidence-based solutions that promote sustainable development and well-being for all.',
			'Contributing to the preservation and promotion of cultural heritage, by working to safeguard endangered languages, monuments, and cultural practices, and by promoting cultural exchange and dialogue among diverse communities.',
			'Mentoring and coaching junior software engineers and contributing to the development of a strong and collaborative engineering culture within the organization.'
		],
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
		about:
			"Educação Livre is a Brazilian nonprofit organization dedicated to promoting free and open education for all. The organization's mission is to provide access to high-quality educational resources and opportunities to underserved communities, with a focus on empowering young people to become agents of social change and innovation.",
		challenges:
			'At Educação Livre, I had the opportunity to work on a range of innovative projects aimed at transforming education in Brazil and beyond.',
		challengesPoints: [
			'Developing new software platforms and tools to support open and collaborative learning, such as online learning communities, educational games, and interactive multimedia resources.',
			'Designing and implementing innovative educational programs and curricula that empower students to become active learners and critical thinkers, with a focus on promoting creativity, collaboration, and social responsibility.',
			'Collaborating with educators and researchers to conduct cutting-edge research on the impact of open education and technology on learning outcomes and social equity, and to develop new evidence-based approaches to educational practice and policy.',
			'Contributing to the development of a vibrant and collaborative educational ecosystem in Brazil and beyond, by partnering with other organizations, universities, and educational stakeholders to promote innovation, access, and diversity in education.',
			'Mentoring and coaching junior software engineers and contributing to the development of a strong and collaborative engineering culture within the organization.'
		],
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
