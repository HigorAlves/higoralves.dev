import React from 'react'

import { Button, Group, Space, Text } from '@mantine/core'
import { useRouter } from 'next/router'

import { Title, UpDownMotion } from '~/components'

export function TitleHome() {
	const router = useRouter()

	return (
		<>
			<UpDownMotion>
				<Title white order={1} gradient={'orangeToPink'}>
					Build and ship your app faster
				</Title>
			</UpDownMotion>

			<Space h={'xl'} />

			<UpDownMotion>
				<Title order={2} weight={'regular'} white>
					Helping companies make the world a better place through quality
					software.
				</Title>

				<Space h='sm' />

				<UpDownMotion>
					<Text weight={'thin'}>NodeJS | React | Blockchain</Text>
				</UpDownMotion>
				<Space h='sm' />
				<UpDownMotion>
					<Group>
						<Button color={'orange'} variant={'light'} size={'xs'}>
							Hire me
						</Button>

						<Button
							color={'dark'}
							variant={'light'}
							size={'xs'}
							onClick={() => router.push('projects')}
						>
							Check my projects
						</Button>
					</Group>
				</UpDownMotion>
			</UpDownMotion>
		</>
	)
}
