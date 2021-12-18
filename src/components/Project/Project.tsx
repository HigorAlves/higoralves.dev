import React from 'react'

import { Space, Text } from '@mantine/core'
import Image from 'next/image'

import { Link, Title } from '~/components'

interface Props {
	company: string
	slug: string
	country: string
	description: string
	cover: {
		title: string
		url: string
	}
}

export function Project({ cover, country, description, slug, company }: Props) {
	return (
		<article>
			<Link href={`/project/${slug}`}>
				<>
					<div style={{ borderRadius: '6px', overflow: 'hidden' }}>
						<Image
							src={cover.url}
							width={350}
							height={300}
							layout={'responsive'}
							alt={cover.title}
							objectFit={'cover'}
							objectPosition={'center'}
						/>
					</div>

					<Space h={'md'} />
					<div>
						<Title order={2} white>
							{company}
						</Title>
						<Text lineClamp={2}>{description}</Text>

						<Text align={'right'} mt={'sm'} size={'xs'}>
							{country}
						</Text>
					</div>
				</>
			</Link>
		</article>
	)
}
