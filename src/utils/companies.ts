import { IconBallon, IconFlag, IconStar, TablerIcon } from '@tabler/icons'

interface ICompany {
	job: string
	name: string
	website: string
	city: string
	country: string
	startDate: string
	endDate: string
	icon: TablerIcon
	show: boolean
}

export const COMPANIES: Array<ICompany> = [
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
		icon: IconBallon,
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
		icon: IconBallon,
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
		icon: IconBallon,
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
		icon: IconBallon,
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
		icon: IconBallon,
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
		icon: IconBallon,
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
		icon: IconBallon,
		show: true
	}
]
