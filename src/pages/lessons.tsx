import React from 'react'

import { Container, Text } from '@mantine/core'

import { Title, UpDownMotion } from '~/components'

export default function Courses() {
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
					Find all episodes of my lessons
				</Title>
				<Text>
					Practical content that increases developer happiness and productivity
				</Text>
			</UpDownMotion>
		</Container>
	)
}
