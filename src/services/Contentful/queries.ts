import { gql } from 'graphql-request'

export const getProjectsPaths = gql`
	query getProjects($locale: String) {
		projectCollection(locale: $locale) {
			items {
				slug
			}
		}
	}
`

export const getProjects = gql`
	query getProjects($locale: String) {
		projectCollection(locale: $locale) {
			items {
				company
				slug
				country
				description
				title
				cover {
					title
					url
				}
			}
		}
	}
`

export const getProject = gql`
	query getProject($locale: String, $slug: String) {
		projectCollection(locale: $locale, where: { slug: $slug }) {
			items {
				title
				company
				site
				country
				description
				cover {
					title
					url
				}
				technologiesCollection(limit: 20) {
					items {
						name
						officialPage
						icon {
							url
							title
						}
					}
				}
			}
		}
	}
`
