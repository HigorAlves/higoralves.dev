import React from 'react'

import { Button, Col, Grid, Space, Text, Title } from '@mantine/core'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { useKBar } from 'kbar'

import { Ball } from '~/components'
import { containerVariants, itemVariants } from '~/layouts/animation'

export default function Home() {
	const { query } = useKBar()

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
						<Text weight={700}>Senior Software Engineering at X-Team</Text>
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
							onClick={query.toggle}
							variant={'light'}
							size={'xs'}
						>
							Press to start →
						</Button>
					</motion.div>
				</motion.div>
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
