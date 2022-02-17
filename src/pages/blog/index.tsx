import React from 'react'

import { Space, Grid, Col } from '@mantine/core'
import { GetStaticPropsContext } from 'next'
import readTime from 'reading-time'

import { BlogHeader, SingleBlogPost, Title, UpDownMotion } from '~/components'
import Contentful, {
	BlogPost,
	BlogPostsCollection,
	getBlogPosts
} from '~/services/Contentful'
import { dateFormatSmall } from '~/utils/dateFormats'

export async function getStaticProps(context: GetStaticPropsContext) {
	const { locale } = context
	const data: BlogPostsCollection = await Contentful.request(getBlogPosts, {
		locale
	})

	const posts = data.blogpostCollection.items.map(item => {
		const { text } = readTime(item.content)
		return {
			...item,
			date: dateFormatSmall(item.sys.firstPublishedAt, locale ?? 'en-US'),
			timeToRead: text
		}
	})

	return {
		props: {
			posts
		},
		revalidate: 60 * 60 * 10 // 10 days
	}
}

type Props = {
	posts: BlogPost[]
}

export default function Blog({ posts }: Props) {
	return (
		<div>
			<UpDownMotion>
				<BlogHeader />
				{/*<Space h={60} />*/}
				{/*<FeatureBlogPost />*/}
				<Space h={60} />
			</UpDownMotion>

			<UpDownMotion>
				{posts.length <= 0 ? <Title order={4}>No posts yet :C</Title> : null}
			</UpDownMotion>
			<Grid justify={'left'} align={'center'}>
				{posts.map(post => (
					<Col span={12} md={4} lg={4} key={post.slug}>
						<UpDownMotion>
							<SingleBlogPost
								image={post.cover.url}
								alt={post.cover.title}
								title={post.title}
								date={post.date}
								slug={post.slug}
								timeToRead={post.timeToRead}
							/>
						</UpDownMotion>
					</Col>
				))}
			</Grid>
		</div>
	)
}
