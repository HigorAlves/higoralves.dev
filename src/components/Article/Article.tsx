import React from 'react'

import { Button, Group, Paper, Space, Text } from '@mantine/core'
import Image from 'next/image'

import { Locale } from '~/graphql/generated/graphql'

import useClasses from './article.styles'

interface Props {
	image: {
		url: string
		alt: string
	}
	locale: Locale
	techLabel: string
	timeToRead: number
	title: string
	description: string
}

export function Article({
	image,
	description,
	techLabel,
	timeToRead,
	title,
	locale
}: Props) {
	const { classes } = useClasses()
	const languageColor = locale === Locale.En ? 'red' : 'green'

	return (
		<article className={classes.article}>
			<div className={classes.imageWrapper}>
				<Image
					src={image.url}
					alt={image.alt}
					layout={'responsive'}
					width={300}
					height={150}
					objectFit={'cover'}
					objectPosition={'center'}
				/>
			</div>
			<Paper shadow='sm' p='xl' withBorder className={classes.paper}>
				<Group position={'apart'}>
					<Group>
						<Text size={'xs'} color={'yellow'}>
							{techLabel.toUpperCase()}
						</Text>
						<Text size={'xs'} weight={700}>
							{timeToRead} MIN READING
						</Text>
					</Group>
					<Text size={'xs'} weight={700} color={languageColor}>
						{locale.toUpperCase()}
					</Text>
				</Group>
				<Space h={'md'} />
				<Text size={'xl'} weight={700}>
					{title}
				</Text>
				<Space h={'sm'} />
				<Text size={'sm'} lineClamp={6}>
					{description}
				</Text>

				<Space h={'md'} />
				<Button
					compact
					size={'xs'}
					variant='gradient'
					gradient={{ from: 'orange', to: 'red' }}
				>
					Read more
				</Button>
			</Paper>
		</article>
	)
}
