import React from 'react'

import { Space, Text } from '@mantine/core'
import { dehydrate, QueryClient } from 'react-query'

import { Title } from '~/components'
import { REVALIDATE_TIME } from '~/config/constants'
import { ArticlesList } from '~/containers'
import { useArticlesQuery } from '~/graphql/generated/graphql'

export async function getStaticProps() {
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery(['Articles'], useArticlesQuery.fetcher())

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		},
		revalidate: REVALIDATE_TIME
	}
}

export default function Blog() {
	const { data } = useArticlesQuery()

	return (
		<>
			<section id={'blog-title'}>
				<Title
					order={1}
					gradient={'purpleToGreen'}
					sx={() => ({
						fontSize: '3rem'
					})}
				>
					Articles. Updates. Guides
				</Title>
				<Text>Learn development with great articles.</Text>
				<Space h={60} />
				<ArticlesList data={data} />
			</section>
		</>
	)
}
