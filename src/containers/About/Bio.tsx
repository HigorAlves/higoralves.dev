import React from 'react'

import { Blockquote, Button, Text } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import { HiOutlineDownload } from 'react-icons/hi'
import { IoCopyOutline } from 'react-icons/io5'

import { Title } from '~/components'

export function Bio() {
	const clipboard = useClipboard({ timeout: 500 })
	const description =
		"Higor Alves is a Brazilian programmer. He currently lives in San Francisco, California, where he's the Senior Software engineer at X-Team. His lifelong appreciation for building software and sharing knowledge led him to speak in over 6 conferences in Brazil."

	return (
		<>
			<Title order={3}>Bio</Title>
			<Text size={'sm'}>
				This is made for journalists, podcast hosts, and event organizers to
				copy-and-paste.
			</Text>
			<Blockquote>{description}</Blockquote>
			<Button
				leftIcon={<IoCopyOutline />}
				variant='outline'
				color={'orange'}
				onClick={() => clipboard.copy(description)}
			>
				Copy to clipboard
			</Button>

			<Button
				leftIcon={<HiOutlineDownload />}
				variant='outline'
				color={'grey'}
				style={{ marginLeft: 20 }}
			>
				<a
					download
					href={'/static/images/ha-profile.jpg'}
					style={{ textDecoration: 'inherit', color: 'inherit' }}
				>
					Download headshot
				</a>
			</Button>
		</>
	)
}
