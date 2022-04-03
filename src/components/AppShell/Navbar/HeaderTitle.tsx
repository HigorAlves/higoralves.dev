import React from 'react'

import { Text } from '@mantine/core'
import Link from 'next/link'

import { Title } from '~/components'

export function HeaderTitle() {
	return (
		<Link href={'/'} passHref>
			<section>
				<Title order={2}>Higor Alves</Title>
				<Text size={'xs'} align={'right'} color={'gray'}>
					Keep Moving Foward
				</Text>
			</section>
		</Link>
	)
}
