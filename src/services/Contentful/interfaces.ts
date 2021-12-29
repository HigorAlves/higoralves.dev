import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface IProject {
	title: string
	company: string
	slug: string
	country: string
	description: string
	source?: MDXRemoteSerializeResult<Record<string, unknown>>
	cover: {
		title: string
		url: string
	}
	technologiesCollection?: {
		items: Technology[]
	}
	seo: SEO
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

interface SEO {
	title: string
	type: 'article' | 'place' | 'website'
	image: {
		url: string
		title: string
	}
	url: string
	name: string
	description: string
	twitter: string
}
