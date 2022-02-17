import React from 'react'

import { Container, Text } from '@mantine/core'

import { Title, UpDownMotion } from '~/components'

export default function Courses() {
	return (
		<Container>
			<UpDownMotion>
				<Title
					order={1}
					gradient={'purpleToGreen'}
					sx={() => ({
						fontSize: '3rem'
					})}
				>
					Level up as a developer.
				</Title>
				<Text>Invest in yourself with a premium dev course.</Text>
			</UpDownMotion>
		</Container>
	)
}
