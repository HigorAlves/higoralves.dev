import React from 'react'

import { Button, Col, Grid, Space, Text, Title } from '@mantine/core'
import { Canvas } from '@react-three/fiber'
import { useKBar } from 'kbar'

import { Ball } from '~/components'

export function getStaticProps() {
	return {}
}

export default function Home() {
	const { query } = useKBar()

	return (
		<Grid justify='center' align='center' gutter={40}>
			<Col span={12} md={5}>
				<Title
					order={1}
					sx={theme => ({
						color:
							theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[9]
					})}
				>
					Helping companies make the world a better place through quality
					software.
				</Title>

				<Space h='sm' />

				<Text weight={700}>Senior Software Engineering at X-Team</Text>

				<Space h='sm' />
				<Button
					color={'yellow'}
					onClick={query.toggle}
					variant={'light'}
					size={'xs'}
				>
					Press to start →
				</Button>
			</Col>

			<Col span={12} md={6}>
				<Canvas
					style={{
						height: '60vh'
					}}
				>
					<ambientLight intensity={0.5} />
					<directionalLight position={[-2, 5, 2]} intensity={1} />
					<Ball />
				</Canvas>
			</Col>
		</Grid>
	)
}
