import React from 'react'

import {
	Blockquote,
	Button,
	Col,
	Container,
	Grid,
	Space,
	Text
} from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import { CopyIcon, DownloadIcon } from '@primer/octicons-react'

import { Title, UpDownMotion } from '~/components'
import { Meta } from '~/layouts'

export default function About() {
	const clipboard = useClipboard({ timeout: 500 })
	const bio =
		"Higor Alves is a Brazilian programmer. He currently lives in San Francisco, California, where he's the Senior Software engineer at X-Team. His lifelong appreciation for building software and sharing knowledge led him to speak in over 6 conferences in Brazil."

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
					<Col span={12} md={6} />
					<Col span={12} md={6}>
						<Title order={1} white>
							Hi, I&apos;m Higor Alves, I&apos;m a Software Engineering.
						</Title>

						<Space h='xs' />
						<Title order={2}>
							Building world-class products that make people happy.
						</Title>

						<Space h='xl' />
						<Text>
							I&apos;m currently the Senior Software Engineering at X-Team.
							Before that, I was the SE at Toro Investimento. I&apos;m
							originally from Brazil and now living in sunny California.
						</Text>

						<Space h='xl' />
						<Text>
							When I&apos;m not working, I like running, and explore other
							countries.
						</Text>
					</Col>
				</Grid>

				<Title order={3}>Bio</Title>
				<Text size={'sm'}>
					This is made for journalists, podcast hosts, and event organizers to
					copy-and-paste.
				</Text>
				<Blockquote>{bio}</Blockquote>
				<Button
					leftIcon={<CopyIcon />}
					variant='outline'
					color={'orange'}
					onClick={() => clipboard.copy(bio)}
				>
					Copy to Clipboard
				</Button>

				<Button
					leftIcon={<DownloadIcon />}
					variant='outline'
					color={'grey'}
					style={{ marginLeft: 20 }}
				>
					<a
						download
						href={"'/static/images/ha-profile.jpg'"}
						style={{ textDecoration: 'inherit', color: 'inherit' }}
					>
						Download Headshot
					</a>
				</Button>
			</UpDownMotion>
		</Container>
	)
}

const meta: Meta = {
	image: {
		title: '',
		url: ''
	},
	title: 'About // Higor Alves',
	type: 'website',
	description: 'Explore. Work. Live',
	twitter: '@higorhaalves',
	url: 'https://higoralves.dev',
	name: 'Higor Alves'
}

About.meta = meta
