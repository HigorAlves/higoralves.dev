import React from 'react'

import { Button, Group, Space, Text } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { VscFlame, VscGithubAlt } from 'react-icons/vsc'

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
						<Link href={'https://github.com/higoralves'} passHref>
							<a target={'_blank'}>
								<Button color={'orange'} variant={'light'} size={'sm'}>
									<VscGithubAlt />
									<Space w={10} />
									Github
								</Button>
							</a>
						</Link>

						<Button
							color={'violet'}
							variant={'light'}
							size={'sm'}
							onClick={() => router.push('projects')}
						>
							<VscFlame />
							<Space w={10} />
							Projects
						</Button>
					</Group>
				</UpDownMotion>
			</UpDownMotion>
		</>
	)
}
