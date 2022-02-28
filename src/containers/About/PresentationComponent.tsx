import React from 'react'

import { Space, Text } from '@mantine/core'
import { useTranslation } from 'next-i18next'

import { Title } from '~/components'

export function PresentationComponent() {
	const { t } = useTranslation('about')

	return (
		<>
			<Title order={1} white>
				{t('title')}
			</Title>

			<Space h='xs' />
			<Title order={2}>{t('subtitle')}</Title>

			<Space h='xl' />
			<Text>{t('aboutText')}</Text>

			<Space h='xl' />
			<Text>{t('secondAboutText')}</Text>
		</>
	)
}
