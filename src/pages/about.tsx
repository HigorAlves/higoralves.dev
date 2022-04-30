import React from 'react'

import { Col, Container, Grid, Space } from '@mantine/core'
import { NextSeo } from 'next-seo'

import { Title, UpDownMotion } from '~/components'
import { AboutImage, Bio, PresentationComponent } from '~/containers'

export default function About() {
	return (
		<Container>
			<NextSeo
				title={`Higor Alves | About`}
				description={'Explore. Work. Live.'}
			/>
			<UpDownMotion>
				<Title
					order={1}
					gradient={'yellowToPink'}
					sx={() => ({
						fontSize: '3rem'
					})}
				>
					Explore. Work. Live.
				</Title>

				<Space h={'xl'} />

				<Grid align='flex-start'>
					<Col span={12} md={6}>
						<AboutImage />
					</Col>
					<Col span={12} md={6}>
						<PresentationComponent />
					</Col>
				</Grid>

				<Bio />
			</UpDownMotion>
		</Container>
	)
}
