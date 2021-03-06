import React from 'react'

import { Button, Group, Paper, Space, Text } from '@mantine/core'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Language } from '~/graphql/generated/graphql'

import useClasses from './article.styles'

interface Props {
	title: string
	route: string
	locale: Language
	subject: string
	timeToRead: string
	description: string
	image: {
		url: string
		alt: string
	}
}

export function Article({
	image,
	description,
	subject,
	timeToRead,
	title,
	locale,
	route
}: Props) {
	const { classes } = useClasses()
	const router = useRouter()
	const languageColor = locale === Language.En ? 'red' : 'green'

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
							{subject.toUpperCase()}
						</Text>
						<Text size={'xs'} weight={700} color={'gray'}>
							{timeToRead.toUpperCase()}
						</Text>
					</Group>
					<Text size={'xs'} weight={700} color={languageColor}>
						{locale.toUpperCase()}
					</Text>
				</Group>
				<Space h={'md'} />
				<Text size={'xl'} weight={700} lineClamp={2}>
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
					onClick={() => router.push(`/blog/${route}`)}
				>
					Read more
				</Button>
			</Paper>
		</article>
	)
}
