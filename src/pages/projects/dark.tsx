import { Fragment, useEffect, useState } from 'react'

import { Grid, Loader, Tabs } from '@mantine/core'
import { IconFlame, IconNews } from '@tabler/icons'
import { useInView } from 'react-intersection-observer'

import { ProductCard } from '~/components/ProductCard/ProductCard.component'
import { useProducts } from '~/hooks'
import { ORDER } from '~/hooks/usePosts/types'

export default function DarkTest() {
	const { ref, inView } = useInView()
	const [activeTab, setActiveTab] = useState<ORDER>(ORDER.RANKING)
	const { data, isFetchingNextPage, isLoading, fetchNextPage } = useProducts(
		activeTab,
		20
	)

	useEffect(() => {
		if (inView) {
			fetchNextPage()
		}
	}, [fetchNextPage, inView])

	function generateProductCards() {
		return (
			<Grid>
				{data?.pages.map(page => (
					<Fragment key={page.posts.pageInfo.startCursor}>
						{page.posts.edges.map(({ node }, index) => (
							<Grid.Col sm={12} md={3} key={node.id}>
								<ProductCard
									name={node.name}
									avatar={node.thumbnail.url}
									votes={node.votesCount}
									description={node.description}
								/>
							</Grid.Col>
						))}
					</Fragment>
				))}
			</Grid>
		)
	}

	return (
		<Tabs value={activeTab} onTabChange={(tab: ORDER) => setActiveTab(tab)}>
			<Tabs.List>
				<Tabs.Tab value={ORDER.RANKING} icon={<IconFlame size={14} />}>
					Popular
				</Tabs.Tab>
				<Tabs.Tab value={ORDER.NEWEST} icon={<IconNews size={14} />}>
					Newest
				</Tabs.Tab>
			</Tabs.List>

			<Tabs.Panel value={ORDER.RANKING} pt='xl'>
				{generateProductCards()}
			</Tabs.Panel>

			<Tabs.Panel value={ORDER.NEWEST} pt='xl'>
				{generateProductCards()}
			</Tabs.Panel>

			<span ref={ref} />
			{(isFetchingNextPage || isLoading) && (
				<Loader size={'sm'} variant={'bars'} mt={'xl'} />
			)}
		</Tabs>
	)
}
