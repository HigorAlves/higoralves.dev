import React from 'react'

import { Space, Text, Card, Badge, Group } from '@mantine/core'
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
			<Link href={`/projects/${slug}`}>
				<Card shadow={'xs'} padding={'lg'}>
					<Card.Section
						style={{
							borderTopRightRadius: '6px',
							borderTopLeftRadius: '6px',
							overflow: 'hidden'
						}}
					>
						<Image
							src={cover.url}
							width={350}
							height={300}
							layout={'responsive'}
							alt={cover.title}
							objectFit={'cover'}
							objectPosition={'center'}
						/>
					</Card.Section>

					<Space h={'md'} />
					<div>
						<Title order={2} white>
							{title}
						</Title>
						<Text lineClamp={2}>{description}</Text>

						<Group position={'apart'} mt={'sm'}>
							<Badge
								variant={'gradient'}
								gradient={{ from: 'cyan', to: 'teal' }}
							>
								{company}
							</Badge>
							<Text align={'right'} size={'xs'}>
								{country}
							</Text>
						</Group>
					</div>
				</Card>
			</Link>
		</article>
	)
}
