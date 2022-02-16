import React from 'react'

import { Button, Col, Grid, Space, Text, Title } from '@mantine/core'
import { useNotifications } from '@mantine/notifications'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'

import { Ball } from '~/components'
import { Meta } from '~/layouts'
import { containerVariants, itemVariants } from '~/layouts/animation'

export default function Home() {
	const notifications = useNotifications()
	return (
		<Grid justify='center' align='center' gutter={40}>
			<Col span={12} md={5}>
				<motion.div
					initial={'hidden'}
					animate={'visible'}
					exit={'exit'}
					variants={containerVariants}
				>
					<Title
						order={1}
						sx={theme => ({
							color:
								theme.colorScheme === 'dark'
									? theme.white
									: theme.colors.dark[9]
						})}
					>
						Helping companies make the world a better place through quality
						software.
					</Title>

					<Space h='sm' />

					<motion.div
						variants={itemVariants}
						initial={'hidden'}
						animate={'visible'}
						exit={'exit'}
					>
						<Text weight={700}>Senior Software Engineering</Text>
					</motion.div>
					<Space h='sm' />
					<motion.div
						variants={itemVariants}
						initial={'hidden'}
						animate={'visible'}
						exit={'exit'}
					>
						<Button
							color={'yellow'}
							onClick={() =>
								notifications.showNotification({
									title: 'Default notification',
									message: 'Hey there, your code is awesome! 🤥'
								})
							}
							variant={'light'}
							size={'xs'}
						>
							Press to start →
						</Button>
					</motion.div>
				</motion.div>
			</Col>
			<Col span={12} md={6}>
				<motion.div
					variants={itemVariants}
					initial={'hidden'}
					animate={'visible'}
					exit={'exit'}
				>
					<Canvas
						style={{
							height: '60vh'
						}}
					>
						<ambientLight intensity={0.5} />
						<directionalLight position={[-2, 5, 2]} intensity={1} />
						<Ball />
					</Canvas>
				</motion.div>
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
