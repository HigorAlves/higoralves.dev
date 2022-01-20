import React from 'react'

import { Text, Space, Grid, Col } from '@mantine/core'
// @ts-ignore
import { GetStaticPropsContext } from 'next'
import readTime from 'reading-time'

import { FeatureBlogPost, SingleBlogPost, Title } from '~/components'
import Contentful, {
	BlogPost,
	BlogPostsCollection,
	getBlogPosts
} from '~/services/Contentful'

export async function getStaticProps(context: GetStaticPropsContext) {
	const { locale } = context
	const data: BlogPostsCollection = await Contentful.request(getBlogPosts, {
		locale
	})

	const posts = data.blogpostCollection.items.map(item => {
		const { text } = readTime(item.content)
		return {
			...item,
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

			<Grid justify={'left'} align={'center'}>
				{posts.map(post => (
					<Col span={12} md={4} lg={4}>
						<SingleBlogPost
							image={image}
							title={'Blockchain title'}
							date={'November 14th, 2022'}
							timeToRead={5}
						/>
					</Col>
				))}
			</Grid>
		</div>
	)
}
