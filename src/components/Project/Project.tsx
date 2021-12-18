import React from 'react'

import { Space, Text } from '@mantine/core'
import Image from 'next/image'

import { Title } from '~/components'

interface Props {
	company: string
	slug: string
	cover: {
		link: string
		alt: string
	}
	description: string
	country: string
}

export function Project() {
	return (
		<article>
			<Image
				src={
					'https://images.ctfassets.net/r6pyx054np7y/4qJHx16eatzku7hpDETS5H/c51e75219a5f611a7326007a188fda70/tc_cover.png?h=372'
				}
				width={279}
				height={372}
				alt={'project-photo'}
				objectFit={'cover'}
				objectPosition={'center'}
			/>

			<Space h={'md'} />
			<section>
				<Title order={2} white>
					Traders Club
				</Title>
				<Text lineClamp={2}>
					Uma comunidade de investidores para você não investir sozinho
				</Text>

				<Text align={'right'} mt={'sm'} size={'xs'}>
					Brazil - São Paulo
				</Text>
			</section>
		</article>
	)
}
