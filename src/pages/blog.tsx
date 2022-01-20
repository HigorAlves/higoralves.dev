import React from 'react'

import { Text, Space, Grid, Col } from '@mantine/core'

import { FeatureBlogPost, SingleBlogPost, Title } from '~/components'

export default function Blog() {
	const image =
		'https://res.cloudinary.com/kentcdodds-com/image/upload/w_2100,q_auto,f_auto,b_rgb:e6e9ee/kentcdodds.com/content/blog/how-i-built-a-modern-website-in-2021/banner_iplhop'

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

			<Space h={60} />

			<Grid justify={'center'} align={'center'}>
				<Col span={12} md={4} lg={4}>
					<SingleBlogPost
						image={image}
						title={'Blockchain title'}
						date={'November 14th, 2022'}
						timeToRead={5}
					/>
				</Col>
			</Grid>
		</div>
	)
}
