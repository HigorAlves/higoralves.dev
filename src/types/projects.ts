import { TECH_ICONS } from '~/components/TechCard/Icons'

enum EmploymentType {
	FULLTIME = 'Full-time'
}

enum LocationType {
	REMOTE = 'Remote'
}

export type Skill = {
	id: keyof typeof TECH_ICONS
	name: string
	website: string
	worksWithSince: Date
	logo: string
}

export type ProjectType = {
	id: string
	title: string
	jobTitle: string
	image: string
	description: string
	isFeature: boolean
	employmentType: EmploymentType
	skills: Array<Skill>
	carousel: Array<string>
	company: {
		name: string
		location: string
		locationType: LocationType
	}
	duration: {
		startDate: Date
		endDate: Date
	}
}
