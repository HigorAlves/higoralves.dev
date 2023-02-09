import { gql } from 'graphql-request'
import { useInfiniteQuery } from 'react-query'

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
		pageInfo: {
			endCursor: string
			hasNextPage: boolean
			hasPreviousPage: boolean
			startCursor: string
		}
	}
}

export enum ORDER {
	RANKING = 'RANKING',
	NEWEST = 'NEWEST'
}

interface IProduct {
	order: ORDER
	page: number
	after?: string
}

async function fetchProjects(variables: IProduct) {
	const query = gql`
		query ($page: Int!, $order: PostsOrder!, $after: String!) {
			posts(first: $page, order: $order, after: $after) {
				pageInfo {
					endCursor
					hasNextPage
					hasPreviousPage
					startCursor
				}
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

	return await graphQLClient.request(query, variables)
}

export function useProducts(order: ORDER, page: number, after = '') {
	return useInfiniteQuery<IDataPosts, Error>({
		queryKey: ['projects', order],
		queryFn: data =>
			fetchProjects({ order, page, after: data.pageParam || after }),
		getPreviousPageParam: firstPage =>
			firstPage.posts.pageInfo.hasPreviousPage
				? firstPage.posts.pageInfo.startCursor
				: undefined,
		getNextPageParam: lastPage => {
			return lastPage.posts.pageInfo?.hasNextPage
				? lastPage.posts.pageInfo.endCursor
				: undefined
		}
	})
}
