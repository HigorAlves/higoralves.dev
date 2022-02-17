import React from 'react'

import { Button, Col, Grid, Space, Text } from '@mantine/core'
import Image from 'next/image'

import { Title, UpDownMotion } from '~/components'
import { Meta } from '~/layouts'

export default function Home() {
	return (
		<Grid justify='center' align='center' gutter={40}>
			<Col span={12} md={5}>
				<UpDownMotion>
					<Title white order={1} gradient={'orangeToPink'}>
						Build and ship your app faster
					</Title>
				</UpDownMotion>

				<Space h={'xl'} />

				<UpDownMotion>
					<Title order={2} weight={'regular'} white>
						Helping companies make the world a better place through quality
						software.
					</Title>

					<Space h='sm' />

					<UpDownMotion>
						<Text weight={'thin'}>Senior Software Engineering</Text>
					</UpDownMotion>
					<Space h='sm' />
					<UpDownMotion>
						<Button color={'orange'} variant={'light'} size={'xs'}>
							Press to start →
						</Button>
					</UpDownMotion>
				</UpDownMotion>
			</Col>

			<Col span={12} md={6}>
				<UpDownMotion>
					<div style={{ position: 'relative' }}>
						<Image
							src={'/static/images/building.png'}
							layout={'fixed'}
							objectFit={'contain'}
							objectPosition={'center'}
							width={700}
							height={600}
							alt={'Company'}
						/>
					</div>
				</UpDownMotion>
			</Col>
		</Grid>
	)
}

const meta: Meta = {
	image: {
		title: '',
		url: ''
	},
	title: 'Higor Alves',
	type: 'website',
	description: 'Senior Software Developer',
	twitter: '@higorhaalves',
	url: 'https://higoralves.dev',
	name: 'Higor Alves'
}

Home.meta = meta
