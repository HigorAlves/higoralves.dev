import React, { useEffect, useState } from 'react'

import { Col, Grid, Space } from '@mantine/core'

import { BlogHeader, SingleBlogPost, Title, UpDownMotion } from '~/components'
import MediumApi from '~/services/Api/medium'
import { BlogPost } from '~/services/Contentful'

export default function Blog() {
	const [posts, setPosts] = useState<BlogPost[]>([])

	async function getPosts() {
		const { posts } = await MediumApi()
		setPosts(posts)
	}

	useEffect(() => {
		getPosts()
	}, [])

	return (
		<div>
			<UpDownMotion>
				<BlogHeader />
				{/*{posts.length > 0 ? (*/}
				{/*	<>*/}
				{/*		<Space h={60} />*/}
				{/*		<FeatureBlogPost*/}
				{/*			alt={posts[0].title}*/}
				{/*			title={posts[0].title}*/}
				{/*			date={posts[0].date}*/}
				{/*			slug={posts[0].link}*/}
				{/*			image={posts[0].image}*/}
				{/*			timeToRead={posts[0].timeToRead}*/}
				{/*		/>*/}
				{/*	</>*/}
				{/*) : null}*/}

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
								content={post.content}
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
