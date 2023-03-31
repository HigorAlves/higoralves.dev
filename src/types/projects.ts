import { SkillIcons } from '~/components/Icons/SkillIcons'
import { ICompany } from '~/types/companies'

export type Skill = {
	id: keyof typeof SkillIcons
	name: string
	website: string
	worksWithSince: Date
	logo: JSX.Element | any
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
