interface INode {
	id: string
	name: string
	description: string
	votesCount: number
	thumbnail: {
		url: string
	}
}

export type IDataPosts = {
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

export interface IProduct {
	order: ORDER
	page: number
	after?: string
}
