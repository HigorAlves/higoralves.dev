import React from 'react'

import { Text } from '@mantine/core'
import Image from 'next/image'

import createStyles from './blog.styles'
import { Title } from '~/components'

type Props = {
	image: string
	title: string
	date: string
	timeToRead: number
}

export function SingleBlogPost(props: Props): JSX.Element {
	const { classes } = createStyles()

	return (
		<article className={classes.wrapper}>
			<div className={classes.imageWrapper}>
				<Image
					alt={'some description of the post'}
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
	)
}
