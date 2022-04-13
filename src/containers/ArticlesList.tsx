import React from 'react'

import { Col, Grid } from '@mantine/core'
import readingTime from 'reading-time'

import { Article } from '~/components'
import { ArticlesQuery } from '~/graphql/generated/graphql'

interface Props {
	data: ArticlesQuery | undefined
}

export function ArticlesList({ data }: Props) {
	return (
		<Grid>
			{data &&
				data.articles.map(article => {
					const { text } = readingTime(article.body.markdown)
					return (
						<Col key={article.slug} sm={12} md={4} lg={4}>
							<Article
								title={article.title}
								route={article.slug}
								locale={article.language}
								subject={article.subject}
								timeToRead={text}
								description={article.description}
								image={{
									alt: article.cover.id,
									url: article.cover.url
								}}
							/>
						</Col>
					)
				})}
		</Grid>
	)
}
