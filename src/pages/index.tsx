import React from 'react'

import { Button, Col, Grid, Space, Text } from '@mantine/core'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { Title } from '~/components'
import { Meta } from '~/layouts'
import { containerVariants } from '~/layouts/animation'

type Props = {
	children: React.ReactNode
}

function MotionWrapper({ children }: Props) {
	return (
		<motion.div
			initial={'hidden'}
			animate={'visible'}
			exit={'exit'}
			variants={containerVariants}
		>
			{children}
		</motion.div>
	)
}

export default function Home() {
	return (
		<Grid justify='center' align='center' gutter={40}>
			<Col span={12} md={5}>
				<MotionWrapper>
					<Title white order={1} gradient={'orangeToPink'}>
						Build and ship your app faster
					</Title>
				</MotionWrapper>

				<Space h={'xl'} />

				<MotionWrapper>
					<Title order={2} weight={'regular'} white>
						Helping companies make the world a better place through quality
						software.
					</Title>

					<Space h='sm' />

					<MotionWrapper>
						<Text weight={'thin'}>Senior Software Engineering</Text>
					</MotionWrapper>
					<Space h='sm' />
					<MotionWrapper>
						<Button color={'orange'} variant={'light'} size={'xs'}>
							Press to start →
						</Button>
					</MotionWrapper>
				</MotionWrapper>
			</Col>

			<Col span={12} md={6}>
				<MotionWrapper>
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
				</MotionWrapper>
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
