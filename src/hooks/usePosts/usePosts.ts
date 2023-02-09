import { gql } from 'graphql-request'
import { useQuery } from 'react-query'

import { graphQLClient } from '~/utils/graphQlClient'

interface INode {
	id: string
	name: string
	description: string
	votesCount: number
	thumbnail: {
		url: string
	}
}

type IDataPosts = {
	posts: {
		edges: Array<{ node: INode }>
	}
}

interface IProduct {
	order: 'RANKING' | 'NEWEST'
}

export function useProducts({ order }: IProduct) {
	return useQuery('products', async (): Promise<IDataPosts> => {
		return await graphQLClient.request(
			gql`
				query {
					posts(first: 5, order: ${order}) {
						edges {
							node {
								id
								name
								description
								votesCount
								thumbnail {
									url
								}
							}
						}
					}
				}
			`
		)
	})
}
