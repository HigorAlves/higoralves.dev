import React from 'react'

import { Space, Text } from '@mantine/core'
import { GetStaticPropsContext } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { dehydrate, DehydratedState, QueryClient } from 'react-query'

import { Title, UpDownMotion } from '~/components'
import { ListOfProjects } from '~/containers'
import { Locale, useProjectsQuery } from '~/graphql/generated/graphql'
import { Meta } from '~/layouts'

export async function getStaticProps(context: GetStaticPropsContext) {
	const queryClient = new QueryClient()
	const { locale } = context
	const language = locale === 'en' ? Locale.En : Locale.Br
	await queryClient.prefetchQuery(
		['Projects'],
		useProjectsQuery.fetcher({ locale: language })
	)

	return {
		props: {
			locale: language,
			dehydratedState: dehydrate(queryClient),
			...(await serverSideTranslations(locale as string, ['project']))
		},
		revalidate: 60 * 60 * 10 // 10 days
	}
}

type Props = {
	dehydratedState: DehydratedState
	locale: Locale
}

export default function Projects({ locale }: Props) {
	const { t } = useTranslation('project')
	const { data } = useProjectsQuery({ locale })

	return (
		<UpDownMotion>
			<Title
				gradient={'cyanToGreen'}
				order={1}
				sx={() => ({
					fontSize: '3rem'
				})}
			>
				{t('header')}
			</Title>
			<Text>{t('subtitle')}</Text>
			<Space h={60} />
			{data && data.projects && <ListOfProjects projects={data.projects} />}
		</UpDownMotion>
	)
}

const meta: Meta = {
	image: {
		title: '',
		url: ''
	},
	title: 'Projects // Higor Alves',
	type: 'website',
	description: 'Work. Hobby. Open Source',
	twitter: '@higorhaalves',
	url: 'https://higoralves.dev',
	name: 'Higor Alves'
}

Projects.meta = meta
