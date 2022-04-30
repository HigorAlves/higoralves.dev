import React from 'react'

import { Container } from '@mantine/core'
import { GraphQLClient } from 'graphql-request'
import { GetStaticPropsContext } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { NextSeo } from 'next-seo'
import readingTime from 'reading-time'

import { ArticleTitle, componentsMap } from '~/components'
import { GRAPH_CMS } from '~/config/constants'
import {
	ArticleQuery,
	ArticlesQuery,
	Language
} from '~/graphql/generated/graphql'
import { articleQuery, articlesQuery } from '~/services/queries'

export async function getStaticPaths() {
	const client = new GraphQLClient(GRAPH_CMS.URL)
	const data: ArticlesQuery = await client.request(articlesQuery)

	return {
		paths: data.articles.map(article => ({
			params: { slug: article.slug }
		})),
		fallback: false
	}
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const { params } = context
	const slug = params?.slug as string
	const client = new GraphQLClient(GRAPH_CMS.URL)
	const data: ArticleQuery = await client.request(articleQuery, {
		slug
	})
	const source = await serialize(data.article?.body.markdown as string)
	const { text } = readingTime(data.article?.body.markdown as string)

	return {
		props: {
			article: data,
			timeToRead: text,
			source
		},
		revalidate: 60 * 60 * 10
	}
}

type Props = {
	article: ArticleQuery
	source: string
	timeToRead: string
}

export default function Project({ article, source, timeToRead }: Props) {
	const data = article.article
	const languageColor = data?.language === Language.En ? 'red' : 'green'

	return (
		data && (
			<Container fluid>
				<NextSeo
					title={`${data.description}`}
					description={'Articles. Updates. Guides'}
				/>
				<ArticleTitle
					timeToRead={timeToRead}
					languageColor={languageColor}
					{...data}
				/>

				<MDXRemote {...(source as any)} components={componentsMap} />
			</Container>
		)
	)
}
