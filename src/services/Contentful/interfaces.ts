import { MDXRemoteSerializeResult } from 'next-mdx-remote'

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

export interface BlogPost {
	title: string
	slug: string
	category: string
	metaTags: string
	content: string
	timeToRead: string
	date: string
	cover: {
		title: string
		url: string
	}
	sys: {
		firstPublishedAt: Date
	}
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
