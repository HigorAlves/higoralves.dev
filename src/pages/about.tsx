import React from 'react'

import {
	Blockquote,
	Button,
	Col,
	Container,
	Grid,
	Space,
	Text
} from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import { CopyIcon, DownloadIcon } from '@primer/octicons-react'
import { GetStaticPropsContext } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { SchemaProps, Title, UpDownMotion } from '~/components'
import { Meta } from '~/layouts'

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
	props: {
		...(await serverSideTranslations(locale as string, ['about']))
	}
})

export default function About() {
	const { t } = useTranslation('about')
	const clipboard = useClipboard({ timeout: 500 })
	const bio =
		"Higor Alves is a Brazilian programmer. He currently lives in San Francisco, California, where he's the Senior Software engineer at X-Team. His lifelong appreciation for building software and sharing knowledge led him to speak in over 6 conferences in Brazil."

	return (
		<Container>
			<UpDownMotion>
				<Title
					order={1}
					gradient={'yellowToPink'}
					sx={() => ({
						fontSize: '3rem'
					})}
				>
					{t('head')}
				</Title>

				<Space h={'xl'} />
				<Grid align='flex-start'>
					<Col span={12} md={6} />
					<Col span={12} md={6}>
						<Title order={1} white>
							{t('title')}
						</Title>

						<Space h='xs' />
						<Title order={2}>{t('subtitle')}</Title>

						<Space h='xl' />
						<Text>{t('aboutText')}</Text>

						<Space h='xl' />
						<Text>{t('secondAboutText')}</Text>
					</Col>
				</Grid>

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
			</UpDownMotion>
		</Container>
	)
}

const meta: Meta = {
	image: {
		title: 'Profile picture',
		url: 'https://avatars.githubusercontent.com/u/11262976?v=4'
	},
	title: 'About // Higor Alves',
	type: 'website',
	description: 'Explore. Work. Live',
	twitter: '@higorhaalves',
	url: 'https://higoralves.dev',
	name: 'Higor Alves'
}

const jsonLd: SchemaProps = {
	'@context': 'https://schema.org/',
	'@type': 'Person',
	name: 'Higor Alves',
	url: 'https://www.higoralves.dev',
	image: 'https://avatars.githubusercontent.com/u/11262976?v=4',
	sameAs: [
		'https://github.com/higoralves/',
		'https://www.linkedin.com/in/higoralvesdev/',
		'https://www.instagram.com/higoralves.dev/'
	],
	jobTitle: 'Senior Software Engineer',
	worksFor: {
		'@type': 'Organization',
		name: 'X-Team'
	}
}

About.meta = meta
About.jsonLd = jsonLd
