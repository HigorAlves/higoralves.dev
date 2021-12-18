import React from 'react'

import { Col, Container, Grid, Space, Text } from '@mantine/core'

import { Project, Title } from '~/components'

export default function Projects() {
	return (
		<Container>
			<Title
				gradient={'cyanToGreen'}
				order={1}
				sx={() => ({
					fontSize: '3rem'
				})}
			>
				Work. Hobby. Open Source
			</Title>
			<Text>
				Here you can navigate to all my different projects, apps, and libraries
				that I helped in some way. Some of them are still active, others have
				been discontinued.
			</Text>
			<Space h={60} />
			<Grid grow>
				<Col span={12} md={6} lg={4}>
					<Project />
				</Col>
				<Col span={12} md={6} lg={4}>
					2
				</Col>
				<Col span={12} md={6} lg={4}>
					3
				</Col>
			</Grid>
		</Container>
	)
}
