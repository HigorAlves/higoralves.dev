import { gql } from 'graphql-request'

export const projectsQuery = gql`
	query Projects() {
		projects (locales: [en, br]) {
			slug
		}
	}`

export const projectQuery = gql`
	query Project($locale: Locale!, $slug: String!) {
		projects (locales: [$locale], where: {slug: $slug}) {
			id
			city
			company
			country
			industry
			slug
			title
			website
			role
			locale
			body{
				markdown
			}
			cover {
				id
				url(transformation: {document: {output: {format: webp}}})
			}
			seo {
				description
				keywords
				title
			}
			technologies {
				name
				website
				icon {
					url
				}
			}
		}
	}
`
