import React from 'react'

import { Button, Col, Grid, Space, Text } from '@mantine/core'
import { GetServerSidePropsContext } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'

import { SchemaProps, Title, UpDownMotion } from '~/components'
import { Meta } from '~/layouts'

export const getServerSideProps = async ({
	locale
}: GetServerSidePropsContext) => ({
	props: {
		...(await serverSideTranslations(locale as string, ['common']))
	}
})

export default function Home() {
	const { t } = useTranslation('common')

	return (
		<Grid justify='center' align='center' gutter={40}>
			<Col span={12} md={5}>
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
						<Button color={'orange'} variant={'light'} size={'xs'}>
							{t('ctaButton')}
						</Button>
					</UpDownMotion>
				</UpDownMotion>
			</Col>

			<Col span={12} md={6}>
				<UpDownMotion>
					<div style={{ position: 'relative' }}>
						<Image
							src={'/static/images/building.png'}
							layout={'fixed'}
							objectFit={'contain'}
							objectPosition={'center'}
							width={700}
							height={600}
							alt={'Company'}
						/>
					</div>
				</UpDownMotion>
			</Col>
		</Grid>
	)
}

const meta: Meta = {
	image: {
		title: '',
		url: ''
	},
	title: 'Higor Alves',
	type: 'website',
	description: 'Senior Software Developer',
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

Home.meta = meta
Home.jsonLd = jsonLd
