import { gql } from 'graphql-request'

export const getProjectsPaths = gql`
	query getProjects {
		projectCollection {
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
				role
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
				role
				industry
				cover {
					title
					url
				}
				seo {
					... on SeoHeader {
						title
						type
						url
						name
						description
						twitter
						image {
							url
							title
						}
					}
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

export const getBlogPosts = gql`
	query getProjects($locale: String) {
		blogpostCollection(locale: $locale) {
			items {
				title
				slug
				cover {
					title
					url
				}
				category
				metaTags
				content
				sys {
					firstPublishedAt
				}
			}
		}
	}
`

export const getBlogPost = gql`
	query getProjects($locale: String, $slug: String) {
		blogpostCollection(locale: $locale, where: { slug: $slug }) {
			items {
				title
				slug
				cover {
					title
					url
				}
				category
				metaTags
				content
			}
		}
	}
`
