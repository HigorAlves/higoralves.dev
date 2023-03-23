import {
	IconBalloon,
	IconFlag,
	IconStar,
	IconHandRock,
	TablerIconsProps
} from '@tabler/icons-react'

interface ICompany {
	job: string
	name: string
	website: string
	city: string
	country: string
	startDate: string
	endDate: string
	icon: (props: TablerIconsProps) => JSX.Element
	show: boolean
}

export const COMPANIES: Array<ICompany> = [
	{
		job: 'Senior Software Engineer',
		name: 'Zipdev',
		website: 'https://zipdev.com',
		city: 'San Francisco',
		country: 'United States',
		startDate: new Date('July 01, 2022').toDateString(),
		endDate: 'Present',
		icon: IconBalloon,
		show: true
	},
	{
		job: 'Senior Software Engineer',
		name: 'Notch Team',
		website: 'https://notchteam.com',
		city: 'San Francisco',
		country: 'United States',
		startDate: new Date('December 01, 2022').toDateString(),
		endDate: new Date('March 24, 2023').toDateString(),
		icon: IconHandRock,
		show: true
	},
	{
		job: 'Senior Software Engineer',
		name: 'Right Balance',
		website: 'https://rightbalance.io',
		city: 'San Francisco',
		country: 'United States',
		startDate: new Date('September 01, 2022').toDateString(),
		endDate: new Date('March 03, 2023').toDateString(),
		icon: IconBalloon,
		show: true
	},
	{
		job: 'Senior Software Engineer',
		name: 'X-Team',
		website: 'https://x-team.com',
		city: 'San Francisco',
		country: 'United States',
		startDate: new Date('August 01, 2021').toDateString(),
		endDate: new Date('December 01, 2022').toDateString(),
		icon: IconStar,
		show: true
	},
	{
		job: 'Senior Software Engineer',
		name: 'Toro',
		website: 'https://toroinvestimentos.com.br',
		city: 'Belo Horizonte',
		country: 'Brazil',
		startDate: new Date('April 01, 2021').toDateString(),
		endDate: new Date('July 01, 2021').toDateString(),
		icon: IconBalloon,
		show: true
	},
	{
		job: 'Software Engineer',
		name: 'Take Blip',
		website: 'https://www.take.net/en/home/',
		city: 'Belo Horizonte',
		country: 'Brazil',
		startDate: new Date('February 01, 2021').toDateString(),
		endDate: new Date('April 01, 2021').toDateString(),
		icon: IconFlag,
		show: true
	},
	{
		job: 'Software Engineer',
		name: 'Monetus',
		website: 'https://mobillsinvestimentos.com.br',
		city: 'Belo Horizonte',
		country: 'Brazil',
		startDate: new Date('November 01, 2020').toDateString(),
		endDate: new Date('April 01, 2021').toDateString(),
		icon: IconBalloon,
		show: true
	},
	{
		job: 'Software Engineer',
		name: 'Nata.House',
		website: 'https://natahouse.com',
		city: 'Belo Horizonte',
		country: 'Brazil',
		startDate: new Date('June 01, 2020').toDateString(),
		endDate: new Date('February 01, 2021').toDateString(),
		icon: IconBalloon,
		show: true
	},
	{
		job: 'Software Engineer',
		name: 'Fabrica de MVP',
		website: '',
		city: 'Campinas',
		country: 'Brazil',
		startDate: new Date('March 01, 2018').toDateString(),
		endDate: new Date('June 01, 2020').toDateString(),
		icon: IconBalloon,
		show: true
	},
	{
		job: 'Software Engineer',
		name: 'Perallis Security',
		website: 'https://hackerrangers.com',
		city: 'Campinas',
		country: 'Brazil',
		startDate: new Date('April 01, 2019').toDateString(),
		endDate: new Date('September 01, 2019').toDateString(),
		icon: IconBalloon,
		show: true
	},
	{
		job: 'Mobile Engineer',
		name: 'UNA/SUS',
		website:
			'https://www.unasus.gov.br/noticia/una-sus-e-ministerio-da-saude-lancam-nova-versao-do-aplicativo-saude-da-pessoa-idosa',
		city: 'Brasília',
		country: 'Brazil',
		startDate: new Date('March 01, 2018').toDateString(),
		endDate: new Date('August 01, 2019').toDateString(),
		icon: IconBalloon,
		show: true
	},
	{
		job: 'Software Engineer',
		name: 'Educação Livre',
		website: 'https://www.edulivre.org.br',
		city: 'Brasília',
		country: 'Brazil',
		startDate: new Date('January 01, 2017').toDateString(),
		endDate: new Date('April 01, 2019').toDateString(),
		icon: IconBalloon,
		show: true
	}
]
