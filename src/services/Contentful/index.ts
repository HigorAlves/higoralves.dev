import { default as ContentfulGraphQLClient } from './contentfulGraphQLClient'

export default new ContentfulGraphQLClient({
	spaceId: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
	token: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN as string,
	env: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT as string
})

export * from './queries'
export * from './interfaces'
