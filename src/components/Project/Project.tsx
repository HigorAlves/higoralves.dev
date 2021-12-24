import React from 'react'

import { Space, Text } from '@mantine/core'
import Image from 'next/image'

import { Link, Title } from '~/components'
import { IProject } from '~/services/Contentful'

export function Project({
	cover,
	country,
	description,
	slug,
	company,
	title
}: IProject) {
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
							{title}
						</Title>
						<Text lineClamp={2}>{description}</Text>

						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<Text align={'left'} mt={'sm'} size={'xs'}>
								Client: {company}
							</Text>
							<Text align={'right'} mt={'sm'} size={'xs'}>
								{country}
							</Text>
						</div>
					</div>
				</>
			</Link>
		</article>
	)
}
