import React from 'react'

import { Blockquote, Button, Text } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import { CopyIcon, DownloadIcon } from '@primer/octicons-react'
import { useTranslation } from 'next-i18next'

import { Title } from '~/components'

export function Bio() {
	const { t } = useTranslation('about')
	const clipboard = useClipboard({ timeout: 500 })

	return (
		<>
			<Title order={3}>Bio</Title>
			<Text size={'sm'}>{t('bio')}</Text>
			<Blockquote>{t('bioDescription')}</Blockquote>
			<Button
				leftIcon={<CopyIcon />}
				variant='outline'
				color={'orange'}
				onClick={() => clipboard.copy(t('btnCopyClipboard'))}
			>
				{t('btnCopyClipboard')}
			</Button>

			<Button
				leftIcon={<DownloadIcon />}
				variant='outline'
				color={'grey'}
				style={{ marginLeft: 20 }}
			>
				<a
					download
					href={"'/static/images/ha-profile.jpg'"}
					style={{ textDecoration: 'inherit', color: 'inherit' }}
				>
					{t('btnDownloadHeadshot')}
				</a>
			</Button>
		</>
	)
}
