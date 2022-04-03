import React from 'react'

import { Button, Group, Space, Text } from '@mantine/core'
import { useTranslation } from 'next-i18next'

import { Title, UpDownMotion } from '~/components'

export function TitleHome() {
	const { t } = useTranslation('home')

	return (
		<>
			<UpDownMotion>
				<Title white order={1} gradient={'orangeToPink'}>
					{t('title')}
				</Title>
			</UpDownMotion>

			<Space h={'xl'} />

			<UpDownMotion>
				<Title order={2} weight={'regular'} white>
					{t('subtitle')}
				</Title>

				<Space h='sm' />

				<UpDownMotion>
					<Text weight={'thin'}>{t('jobTitle')}</Text>
				</UpDownMotion>
				<Space h='sm' />
				<UpDownMotion>
					<Group>
						<Button color={'orange'} variant={'light'} size={'xs'}>
							{t('ctaButtonHireMe')}
						</Button>

						<Button color={'dark'} variant={'light'} size={'xs'}>
							{t('ctaButtonProjects')}
						</Button>
					</Group>
				</UpDownMotion>
			</UpDownMotion>
		</>
	)
}
