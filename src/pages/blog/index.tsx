import React from 'react'

import { Space, Text } from '@mantine/core'

import { Title } from '~/components'

export default function Blog() {
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
			</section>
		</>
	)
}
