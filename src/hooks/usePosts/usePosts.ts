import { gql } from 'graphql-request'
import { useInfiniteQuery } from 'react-query'

import { IDataPosts, IProduct, ORDER } from '~/hooks/usePosts/types'
import { graphQLClient } from '~/utils/graphQlClient'

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
		queryFn: ({ pageParam }) =>
			fetchProjects({ order, page, after: pageParam || after }),
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
