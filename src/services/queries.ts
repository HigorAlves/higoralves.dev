import { gql } from 'graphql-request'

export const projectsQuery = gql`
	query Projects() {
		projects (locales: [en, br]) {
			slug
		}
	}`

export const projectQuery = gql`
	query Project($locale: Locale!, $slug: String!) {
		projects(locales: [$locale], where: { slug: $slug }) {
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
			body {
				markdown
			}
			cover {
				id
				url(transformation: { document: { output: { format: webp } } })
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

export const articleQuery = gql`
	query Article($slug: String!) {
		article(where: { slug: $slug }) {
			cover {
				id
				url(transformation: { document: { output: { format: webp } } })
			}
			body {
				markdown
			}
			description
			language
			slug
			subject
			title
		}
	}
`

export const articlesQuery = gql`
	query Articles {
		articles {
			body {
				markdown
			}
			cover {
				id
				url(transformation: { document: { output: { format: webp } } })
			}
			slug
			subject
			title
			language
			description
		}
	}
`
