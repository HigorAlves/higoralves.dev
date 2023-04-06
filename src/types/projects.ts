import { StaticImageData } from 'next/image'

import { SkillIcons } from '~/components/Icons/SkillIcons'
import { ICompany } from '~/types/companies'

export type Skill = {
	id: keyof typeof SkillIcons
	name: string
	website: string
	worksWithSince: string
	logo: JSX.Element | any
}

export type ProjectType = {
	id: string
	slug: string
	title: string
	thumbnail: string | any
	description: string
	about: string
	challenges?: string
	isFeature: boolean
	skills: Array<Skill>
	carousel: Array<StaticImageData>
	company: ICompany
	duration: {
		startDate: Date | string
		endDate: Date | string
	}
}
