import React from 'react'

import { Col, Container, Grid, Space } from '@mantine/core'

import { SchemaProps, Title, UpDownMotion } from '~/components'
import { AboutImage, Bio, PresentationComponent } from '~/containers'
import { Meta } from '~/layouts'

export default function About() {
	return (
		<Container>
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

const meta: Meta = {
	image: {
		title: 'Profile picture',
		url: 'https://avatars.githubusercontent.com/u/11262976?v=4'
	},
	title: 'About // Higor Alves',
	type: 'website',
	description: 'Explore. Work. Live',
	twitter: '@higorhaalves',
	url: 'https://higoralves.dev',
	name: 'Higor Alves'
}

const jsonLd: SchemaProps = {
	'@context': 'https://schema.org/',
	'@type': 'Person',
	name: 'Higor Alves',
	url: 'https://www.higoralves.dev',
	image: 'https://avatars.githubusercontent.com/u/11262976?v=4',
	sameAs: [
		'https://github.com/higoralves/',
		'https://www.linkedin.com/in/higoralvesdev/',
		'https://www.instagram.com/higoralves.dev/'
	],
	jobTitle: 'Senior Software Engineer',
	worksFor: {
		'@type': 'Organization',
		name: 'X-Team'
	}
}

About.meta = meta
About.jsonLd = jsonLd
