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

export enum ORDER {
	RANKING = 'RANKING',
	NEWEST = 'NEWEST'
}

interface IProduct {
	order: ORDER
	page: number
}

function fetchProjects(variables: IProduct) {
	const query = gql`
		query ($page: Int!, $order: PostsOrder!) {
			posts(first: $page, order: $order) {
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

	return graphQLClient.request(query, variables)
}

export function useProducts(order: ORDER, page: number) {
	return useQuery<IDataPosts, Error>({
		queryKey: ['projects', page, order],
		queryFn: () => fetchProjects({ order, page }),
		keepPreviousData: true
	})
}
