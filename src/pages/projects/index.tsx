import React from 'react'

import { Space, Text } from '@mantine/core'
import { GetStaticPropsContext } from 'next'
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
			dehydratedState: dehydrate(queryClient)
		},
		revalidate: 60 * 60 * 10 // 10 days
	}
}

type Props = {
	dehydratedState: DehydratedState
	locale: Locale
}

export default function Projects({ locale }: Props) {
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
				Work. Hobby. Open Source
			</Title>
			<Text>
				Here you can navigate to all my different projects, apps, and libraries
				that I helped in some way. Some of them are still active, others have
				been discontinued
			</Text>
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
