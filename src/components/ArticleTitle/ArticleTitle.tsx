import React from 'react'

import { Group, Space, Text } from '@mantine/core'
import Image from 'next/image'

import { Title } from '~/components'
import { Language } from '~/graphql/generated/graphql'

type Props = {
	title: string
	subject: string
	timeToRead: string
	languageColor: string
	language: Language
	cover: {
		url: string
		id: string
	}
}

export function ArticleTitle({
	title,
	languageColor,
	language,
	timeToRead,
	subject,
	cover
}: Props) {
	return (
		<section id={'article-title'}>
			<Title mt={'xl'} white>
				{title}
			</Title>
			<Space h={'sm'} />
			<Group position={'apart'}>
				<Group>
					<Text size={'sm'} color={'yellow'}>
						{subject.toUpperCase()}
					</Text>
					<Text size={'sm'} weight={700} color={'gray'}>
						{timeToRead.toUpperCase()}
					</Text>
				</Group>
				<Text size={'sm'} weight={700} color={languageColor}>
					{language.toUpperCase()}
				</Text>
			</Group>
			<Space h={'xl'} />
			<div style={{ borderRadius: '8px', overflow: 'hidden' }}>
				<Image
					src={cover.url}
					width={1920}
					height={1080}
					layout={'responsive'}
					alt={cover.id}
					objectFit={'cover'}
					objectPosition={'center'}
				/>
			</div>
			<Space h={'xl'} />
		</section>
	)
}
