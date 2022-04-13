import React from 'react'

import { Col, Grid, Space, Text } from '@mantine/core'

import { Article, Title } from '~/components'

export default function Blog() {
	return (
		<>
			<section>
				<Title
					order={1}
					gradient={'yellowToPink'}
					sx={() => ({
						fontSize: '3rem'
					})}
				>
					Blog
				</Title>
				<Text>Learn development with great articles.</Text>
				<Space h={'xl'} />
			</section>
			<Grid justify={'center'} align={'center'}>
				<Col md={4}>
					<Article />
				</Col>
			</Grid>
		</>
	)
}
