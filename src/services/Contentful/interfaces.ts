import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { Meta } from '~/layouts'

export interface IProject {
	title: string
	company: string
	slug: string
	country: string
	description: string
	seo?: SEO
	role?: string
	industry?: string
	site?: string
	source?: MDXRemoteSerializeResult<Record<string, unknown>>
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
export interface Path {
	params: {
		slug: string
	}
	locale: 'pt-BR' | 'en-US'
}

export interface BlogPost {
	title: string
	link: string
	image: string
	content: string
	timeToRead: string
	date: string
}

export interface BlogPostsCollection {
	blogpostCollection: {
		items: BlogPost[]
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
