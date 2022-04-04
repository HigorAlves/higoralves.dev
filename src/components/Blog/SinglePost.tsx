import React from 'react'

import { Box, Group, Paper, Text } from '@mantine/core'
import Image from 'next/image'

import { Title } from '~/components'
import { LinkWrapper } from '~/components/Link/Link'

import createStyles from './blog.styles'

type Props = {
	image: string
	title: string
	date: string
	timeToRead: string
	alt: string
	slug: string
	content: string
}

export function SingleBlogPost(props: Props): JSX.Element {
	const { classes } = createStyles()

	return (
		<Box component={LinkWrapper} href={props.slug} target={'_blank'}>
			<article className={classes.wrapper}>
				<div>
					<Image
						alt={props.alt}
						src={props.image}
						layout={'responsive'}
						objectFit={'cover'}
						objectPosition={'center'}
						height={210}
						width={384}
					/>
				</div>

				<Paper radius={'xl'} className={classes.paper}>
					<Group>
						<Text size={'xs'} weight={700} color={'orange'} mt={20}>
							{props.date}
						</Text>
						<Text size={'xs'} weight={700} color={'gray'} mt={20}>
							{props.timeToRead}
						</Text>
					</Group>
					<Title white order={2}>
						{props.title}
					</Title>
					<Text size={'xs'} color={'gray'} mt={20} lineClamp={5}>
						{props.content}
					</Text>
				</Paper>
			</article>
		</Box>
	)
}
