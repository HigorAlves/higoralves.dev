import React from 'react'

import { Text } from '@mantine/core'
import Image from 'next/image'

interface Props {
	icon: {
		url: string
		title: string
	}
	name: string
}

export function Technology({ name, icon }: Props) {
	return (
		<>
			<Image
				src={icon.url}
				width={30}
				height={20}
				layout={'responsive'}
				alt={icon.title}
				objectFit={'contain'}
				objectPosition={'center'}
			/>
			<Text mt={'lg'} align={'center'}>
				{name}
			</Text>
		</>
	)
}
