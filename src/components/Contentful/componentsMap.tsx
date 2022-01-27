import React from 'react'

import { Text } from '@mantine/core'

import { Title } from '~/components'

const ComponentsMap = {
	p: (props: { children: React.ReactChild }) => (
		<Text mt={'xl'}>{props.children}</Text>
	),
	h2: (props: { children: string }) => (
		<Title order={2} mt={'md'}>
			{props.children}
		</Title>
	),
	h3: (props: { children: string }) => (
		<Title order={3} mt={'md'}>
			{props.children}
		</Title>
	)
}

export default ComponentsMap
