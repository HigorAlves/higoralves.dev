import React from 'react'

import { Space, Grid, Col } from '@mantine/core'

import {
	BlogHeader,
	FeatureBlogPost,
	SingleBlogPost,
	Title,
	UpDownMotion
} from '~/components'
import MediumApi from '~/services/Api/medium'

export async function getStaticProps() {
	const posts = await MediumApi()
	return {
		props: {
			posts
		},
		revalidate: 60 * 60 * 10
	}
}
type Props = {
	posts: any[]
}

export default function Blog({ posts }: Props) {
	return (
		<div>
			<UpDownMotion>
				<BlogHeader />
				<Space h={60} />
				<FeatureBlogPost
					alt={posts[0].title}
					title={posts[0].title}
					date={posts[0].date}
					slug={posts[0].link}
					image={posts[0].image}
					timeToRead={posts[0].timeToRead}
				/>
				<Space h={60} />
			</UpDownMotion>

			<UpDownMotion>
				{posts.length <= 0 ? <Title order={4}>No posts yet :C</Title> : null}
			</UpDownMotion>
			<Grid justify={'left'} align={'center'}>
				{posts.map(post => (
					<Col span={12} md={4} lg={4} key={post.link}>
						<UpDownMotion>
							<SingleBlogPost
								image={post.image}
								title={post.title}
								date={post.date}
								slug={post.link}
								timeToRead={post.timeToRead}
								alt={post.title}
							/>
						</UpDownMotion>
					</Col>
				))}
			</Grid>
		</div>
	)
}
