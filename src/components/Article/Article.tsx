import React from 'react'

import { Button, Group, Paper, Space, Text } from '@mantine/core'

export function Article() {
	return (
		<Paper shadow='sm' p='md' withBorder>
			<Group>
				<Text size={'xs'} color={'yellow'}>
					JAVASCRIPT
				</Text>
				<Text size={'xs'} weight={700}>
					10 MIN READING
				</Text>
			</Group>
			<Space h={'md'} />
			<Text size={'xl'} weight={700}>
				Check out the new mansion we got for our eSports team!
			</Text>
			<Space h={'sm'} />
			<Text size={'sm'}>
				Cosplay (コスプレ, kosupure), a portmanteau of the words costume play,
				is a performance art in which participants called cosplayers wear
				costumes and fashion accessories to represent a specific character.
				Cosplayers often in...
			</Text>

			<Space h={'md'} />
			<Button
				compact
				size={'xs'}
				variant='gradient'
				gradient={{ from: 'orange', to: 'red' }}
			>
				Read more
			</Button>
		</Paper>
	)
}
