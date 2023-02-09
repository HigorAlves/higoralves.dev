import { GraphQLClient } from 'graphql-request'

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT_DARK || ''

export const graphQLClient = new GraphQLClient(API_ENDPOINT, {
	headers: {
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_DARK}`
	}
})
