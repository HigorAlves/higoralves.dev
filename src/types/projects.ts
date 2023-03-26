import { TECH_ICONS } from '~/components/TechCard/Icons'
import { ICompany } from '~/utils/companies'

export type Skill = {
	id: keyof typeof TECH_ICONS
	name: string
	website: string
	worksWithSince: Date
	logo: JSX.Element
}

export type ProjectType = {
	id: string
	title: string
	thumbnail: string | any
	description: string
	isFeature: boolean
	skills: Array<Skill>
	carousel: Array<string>
	company: ICompany
	duration: {
		startDate: Date | string
		endDate: Date | string
	}
}
