import { gql } from 'graphql-request'

export interface IProject {
	company: string
	slug: string
	country: string
	description: string
	cover: {
		title: string
		url: string
	}
}

export interface ProjectsCollection {
	projectCollection: {
		items: IProject[]
	}
}

export const getProjects = gql`
	query getProjects($locale: String) {
		projectCollection(locale: $locale) {
			items {
				company
				slug
				country
				description
				cover {
					title
					url
				}
			}
		}
	}
`
