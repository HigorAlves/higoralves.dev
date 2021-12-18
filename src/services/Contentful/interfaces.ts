export interface IProject {
	title?: string
	company: string
	slug: string
	country: string
	description: string
	cover: {
		title: string
		url: string
	}
	technologiesCollection?: {
		items: Technology[]
	}
}

export interface Technology {
	name: string
	officialPage: string
	icon: {
		url: string
		title: string
	}
}

export interface ProjectsCollection {
	projectCollection: {
		items: IProject[]
	}
}
