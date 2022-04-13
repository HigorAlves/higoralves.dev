import React from 'react'

import { Button, Group, Paper, Space, Text } from '@mantine/core'
import Image from 'next/image'

import { Locale } from '~/graphql/generated/graphql'

import useClasses from './article.styles'

export function Article() {
	const { classes } = useClasses()
	const languageColor = 'en' === Locale.En ? 'red' : 'green'
	const image =
		'https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/lukas-eggers-_rKl0w9BdiM-unsplash.jpg'

	return (
		<article className={classes.article}>
			<div className={classes.imageWrapper}>
				<Image
					src={image}
					alt={'test'}
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
							JAVASCRIPT
						</Text>
						<Text size={'xs'} weight={700}>
							10 MIN READING
						</Text>
					</Group>
					<Text size={'xs'} weight={700} color={languageColor}>
						EN
					</Text>
				</Group>
				<Space h={'md'} />
				<Text size={'xl'} weight={700}>
					Check out the new mansion we got for our eSports team!
				</Text>
				<Space h={'sm'} />
				<Text size={'sm'}>
					Cosplay (コスプレ, kosupure), a portmanteau of the words costume play,
					is a performance art in which participants called cosplayers wear
					costumes and fashion accessories to represent a specific character.
					Cosplayers often in...
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
