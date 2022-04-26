import React from 'react'

import { Badge, Card, Group, Space, Text } from '@mantine/core'
import Image from 'next/image'

import { Link, Title } from '~/components'

export function Project({
	cover,
	country,
	description,
	slug,
	company,
	title,
	role,
	city
}: any) {
	return (
		<article>
			<Link href={`/projects/${slug}`}>
				<Card shadow={'xs'}>
					<Card.Section
						style={{
							borderTopRightRadius: '6px',
							borderTopLeftRadius: '6px',
							overflow: 'hidden'
						}}
					>
						<Image
							src={cover}
							width={350}
							height={300}
							layout={'responsive'}
							alt={'Project cover image'}
							objectFit={'cover'}
							objectPosition={'center'}
						/>
					</Card.Section>

					<Space h={'md'} />
					<div>
						<Text<typeof Title>
							component={Title}
							weight={'bold'}
							color={'white'}
							size={'xl'}
							lineClamp={1}
						>
							{title}
						</Text>
						<Text component={'p'} weight={'bold'} mb={'sm'} size={'sm'}>
							{role}
						</Text>
						<Text component={'p'} lineClamp={2}>
							{description}
						</Text>

						<Group position={'apart'} mt={'xl'}>
							<Badge
								variant={'gradient'}
								gradient={{ from: 'orange', to: 'pink' }}
							>
								{company}
							</Badge>
							<Text component={'p'} align={'right'} size={'xs'}>
								{country} - {city}
							</Text>
						</Group>
					</div>
				</Card>
			</Link>
		</article>
	)
}
