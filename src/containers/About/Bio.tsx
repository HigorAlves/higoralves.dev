import React from 'react'

import { Blockquote, Button, Text } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import { useTranslation } from 'next-i18next'
import { HiOutlineDownload } from 'react-icons/hi'
import { IoCopyOutline } from 'react-icons/io5'

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
				leftIcon={<IoCopyOutline />}
				variant='outline'
				color={'orange'}
				onClick={() => clipboard.copy(t('btnCopyClipboard'))}
			>
				{t('btnCopyClipboard')}
			</Button>

			<Button
				leftIcon={<HiOutlineDownload />}
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
