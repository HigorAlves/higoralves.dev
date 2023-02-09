import { useState } from 'react'

import { Grid, LoadingOverlay, Tabs } from '@mantine/core'
import { IconFlame, IconNews } from '@tabler/icons'

import { ProductCard } from '~/components/ProductCard/ProductCard.component'
import { ORDER, useProducts } from '~/hooks'

export default function DarkTest() {
	const [page, setPage] = useState(20)
	const [activeTab, setActiveTab] = useState<ORDER>(ORDER.RANKING)
	const { data, isError, isLoading } = useProducts(activeTab, page)

	function generateProductCards() {
		return (
			<Grid>
				{data &&
					data.posts.edges.map(({ node }) => (
						<Grid.Col sm={12} md={3} key={node.id}>
							<ProductCard
								name={node.name}
								avatar={node.thumbnail.url}
								votes={node.votesCount}
								description={node.description}
							/>
						</Grid.Col>
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
