import React from 'react'

import { Badge, Button, Card, Col, Grid, Space, Text } from '@mantine/core'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Title } from '~/components'

type Props = {
	image: string
	title: string
	date: string
	timeToRead: string
	alt: string
	slug: string
}

export function FeatureBlogPost(props: Props) {
	const router = useRouter()
	return (
		<section id={'blog-feature-section'}>
			<Card shadow={'sm'} padding={60}>
				<Badge
					color='orange'
					variant='outline'
					size={'lg'}
					style={{ position: 'absolute' }}
				>
					Feature article
				</Badge>
				<Grid align={'center'}>
					<Col span={8}>
						<Title order={2} white>
							{props.title}
						</Title>
						<Text weight={700}>{props.date}</Text>

						<Space h={60} />

						<Button
							variant={'gradient'}
							gradient={{ from: 'orange', to: 'pink' }}
							onClick={() => router.push(props.slug)}
						>
							Read full article
						</Button>
					</Col>
					<Col span={4}>
						<Card.Section
							style={{
								position: 'relative',
								borderRadius: '6px',
								overflow: 'hidden'
							}}
						>
							<Image
								alt={props.title}
								src={props.image}
								width={410}
								height={513}
								layout={'responsive'}
								objectFit={'cover'}
								objectPosition={'center'}
							/>
						</Card.Section>
					</Col>
				</Grid>
			</Card>
		</section>
	)
}
