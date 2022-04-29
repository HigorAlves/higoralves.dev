import React from 'react'

import { Space, Text } from '@mantine/core'

import { Title } from '~/components'

export function PresentationComponent() {
	return (
		<>
			<Title order={1} white>
				Hi, I&apos;m Higor Alves, I&apos;m a Software Engineering.
			</Title>

			<Space h='xs' />
			<Title order={2}>
				Building world-class products that make people happy.
			</Title>

			<Space h='xl' />
			<Text>
				I&apos;m currently the Senior Software Engineering at X-Team. Before
				that, I was the SE at Toro Investimento. I&apos;m originally from Brazil
				and now living in sunny California.
			</Text>

			<Space h='xl' />
			<Text>
				When I&apos;m not working, I like running, and explore other countries.
			</Text>
		</>
	)
}
