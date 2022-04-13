import React from 'react'

import Image from 'next/image'

import { Title } from '~/components'

interface Props {
	title: string
	cover: {
		url: string
		id: string
	}
}

export function ProjectHeader({ cover, title }: Props) {
	return (
		<>
			<div style={{ borderRadius: '8px', overflow: 'hidden' }}>
				<Image
					src={cover.url}
					width={1920}
					height={1080}
					layout={'responsive'}
					alt={cover.id}
					objectFit={'cover'}
					objectPosition={'center'}
				/>
			</div>
			<Title mt={'xl'} align={'center'} white>
				{title}
			</Title>
		</>
	)
}
