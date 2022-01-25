import React from 'react'

import { Space, Grid, Col } from '@mantine/core'
import { motion } from 'framer-motion'
// @ts-ignore
import { GetStaticPropsContext } from 'next'
import readTime from 'reading-time'

import { BlogHeader, SingleBlogPost } from '~/components'
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
			date: dateFormatSmall(item.sys.firstPublishedAt, locale),
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
	const variants = {
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.2
			}
		},
		initial: { opacity: 0, y: -30 },
		exit: { opacity: 0, y: -30 }
	}

	return (
		<div>
			<BlogHeader />
			{/*<Space h={60} />*/}
			{/*<FeatureBlogPost />*/}
			<Space h={60} />

			<Grid justify={'left'} align={'center'}>
				{posts.map(post => (
					<Col span={12} md={4} lg={4} key={post.slug}>
						<motion.div
							variants={variants}
							initial={'initial'}
							animate={'animate'}
							exit={'exit'}
						>
							<SingleBlogPost
								image={post.cover.url}
								alt={post.cover.title}
								title={post.title}
								date={post.date}
								slug={post.slug}
								timeToRead={post.timeToRead}
							/>
						</motion.div>
					</Col>
				))}
			</Grid>
		</div>
	)
}
