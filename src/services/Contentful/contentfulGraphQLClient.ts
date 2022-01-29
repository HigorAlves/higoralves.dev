import { GraphQLClient } from 'graphql-request'

interface Props {
	spaceId: string
	token: string
	env: string
}

class ContentfulGraphQLClient extends GraphQLClient {
	static API_BASE = 'https://graphql.contentful.com/content/v1/spaces/'

	constructor({ spaceId, token, env }: Props) {
		super(`${ContentfulGraphQLClient.API_BASE}${spaceId}/environments/${env}`, {
			headers: {
				authorization: `Bearer ${'o1sIGch7sDXrLhb2PokTS6aIzDIPNExWc-_Nhvaduk0'}`
			}
		})
	}
}

export default ContentfulGraphQLClient
