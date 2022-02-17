import React from 'react'

import { Text } from '@mantine/core'

import { ContentfulImage, Title } from '~/components'
import { LinkWrapper } from '~/components/Link/Link'

import createStyles from './blog.styles'

type Props = {
	image: string
	title: string
	date: string
	timeToRead: string
	alt: string
	slug: string
}

export function SingleBlogPost(props: Props): JSX.Element {
	const { classes } = createStyles()

	return (
		<LinkWrapper href={props.slug} target={'_blank'}>
			<article className={classes.wrapper}>
				<div className={classes.imageWrapper}>
					<ContentfulImage
						alt={props.alt}
						src={props.image}
						layout={'responsive'}
						objectFit={'cover'}
						objectPosition={'center'}
						height={350}
						width={250}
					/>
				</div>

				<Text size={'md'} weight={700} color={'gray'} mt={20}>
					{props.date} - {props.timeToRead} min read
				</Text>
				<Title white order={2}>
					{props.title}
				</Title>
			</article>
		</LinkWrapper>
	)
}
