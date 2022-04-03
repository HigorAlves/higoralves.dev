import React from 'react'

import { Text } from '@mantine/core'
import Image from 'next/image'

interface Props {
	icon: string
	name: string
}

export function Technology({ name, icon }: Props) {
	return (
		<>
			<Image
				src={icon}
				width={30}
				height={20}
				layout={'responsive'}
				alt={icon}
				objectFit={'contain'}
				objectPosition={'center'}
			/>
			<Text mt={'lg'} align={'center'}>
				{name}
			</Text>
		</>
	)
}
