import React from 'react'

import { Col, Grid, Space, Text } from '@mantine/core'

import { Article, Title } from '~/components'

export default function Blog() {
	return (
		<>
			<section>
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
			</section>
			<Grid>
				<Col md={4}>
					<Article />
				</Col>
			</Grid>
		</>
	)
}
