import React from 'react'

import { Container } from '@mantine/core'
// @ts-ignore
import { GetStaticPropsContext } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Image from 'next/image'

import { SEOHead, Title } from '~/components'
import {
	BlogPost,
	BlogPostsCollection,
	default as Contentful,
	getBlogPost,
	getBlogPosts,
	Path
} from '~/services/Contentful'
import ComponentsMap from '~/services/Contentful/componentsMap'

export async function getStaticPaths() {
	const data: BlogPostsCollection = await Contentful.request(getBlogPosts)
	const slugs = data.blogpostCollection.items
	const paths: Path[] = []

	slugs.forEach((item: { slug: string }) => {
		paths.push({ params: { slug: item.slug }, locale: 'en-US' })
		paths.push({ params: { slug: item.slug }, locale: 'pt-BR' })
	})

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const { locale, params } = context
	const slug = params.slug
	const data: BlogPostsCollection = await Contentful.request(getBlogPost, {
		locale,
		slug
	})
	const post: BlogPost = data.blogpostCollection.items[0]
	const mdxSource = await serialize(post.content)

	return {
		props: {
			post: {
				...post,
				source: mdxSource
			}
		},
		revalidate: 60 * 60 * 10
	}
}

type Props = {
	post: BlogPost
}

export default function Project({ post }: Props) {
	return (
		<>
			<SEOHead meta={post.seo} />
			<Container>
				<div style={{ borderRadius: '8px', overflow: 'hidden' }}>
					<Image
						src={post.cover.url}
						width={1920}
						height={1080}
						layout={'responsive'}
						alt={post.cover.title}
						objectFit={'cover'}
						objectPosition={'center'}
						priority={true}
					/>
				</div>
				<Title mt={'xl'} align={'center'} white>
					{post.title}
				</Title>

				<MDXRemote {...post.source} components={ComponentsMap} />
			</Container>
		</>
	)
}
