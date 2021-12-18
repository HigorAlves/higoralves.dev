import { gql } from 'graphql-request'

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

export const getProject = gql`
	query getProject($locale: String, $slug: String) {
		projectCollection(locale: $locale, where: { slug: $slug }) {
			items {
				title
				cover {
					title
					url
				}
				company
				country
				description
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
