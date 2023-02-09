import { Fragment, useEffect, useState } from 'react'

import { Grid, LoadingOverlay, Tabs } from '@mantine/core'
import { IconFlame, IconNews } from '@tabler/icons'
import { useInView } from 'react-intersection-observer'

import { ProductCard } from '~/components/ProductCard/ProductCard.component'
import { ORDER, useProducts } from '~/hooks'

export default function DarkTest() {
	const [activeTab, setActiveTab] = useState<ORDER>(ORDER.RANKING)
	const { data, isError, isLoading, fetchNextPage } = useProducts(activeTab, 20)
	const { ref, inView } = useInView()

	useEffect(() => {
		if (inView) {
			fetchNextPage()
		}
	}, [inView])

	function generateProductCards() {
		return (
			<Grid>
				{data?.pages.map(page => (
					<Fragment key={page.posts.pageInfo.startCursor}>
						{page.posts.edges.map(({ node }) => (
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
		<Tabs
			value={activeTab}
			onTabChange={setActiveTab}
			style={{ position: 'relative' }}
		>
			<LoadingOverlay visible={isLoading} />
			<Tabs.List>
				<Tabs.Tab value='RANKING' icon={<IconFlame size={14} />}>
					Popular
				</Tabs.Tab>
				<Tabs.Tab value='NEWEST' icon={<IconNews size={14} />}>
					Newest
				</Tabs.Tab>
			</Tabs.List>

			<Tabs.Panel value='RANKING' pt='xl'>
				{generateProductCards()}
			</Tabs.Panel>

			<Tabs.Panel value='NEWEST' pt='xl'>
				{generateProductCards()}
			</Tabs.Panel>
		</Tabs>
	)
}
