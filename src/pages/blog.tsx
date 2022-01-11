import React from 'react'

import {
	Card,
	Group,
	Text,
	Badge,
	Space,
	Grid,
	Col,
	Button
} from '@mantine/core'
import Image from 'next/image'

import { FeatureBlogPost, Title } from '~/components'

export default function Blog() {
	return (
		<div>
			<section id={'blog-title-section'}>
				<Title
					gradient={'grapeToPink'}
					order={1}
					sx={() => ({
						fontSize: '3rem'
					})}
				>
					Learn development with great articles.
				</Title>
				<Text lineClamp={2}>
					Find the latest of my writing here, you can learn web development,
					software engineering, and tech career in both English and Portuguese.
				</Text>
			</section>

			<Space h={60} />

			<FeatureBlogPost />
		</div>
	)
}
