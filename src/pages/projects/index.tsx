import React from 'react'

import { Space, Text } from '@mantine/core'
import { GetStaticPropsContext } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Title, UpDownMotion } from '~/components'
import { ListOfProjects } from '~/containers'
import { Meta } from '~/layouts'
import {
	default as Contentful,
	getProjects,
	IProject,
	ProjectsCollection
} from '~/services/Contentful'

export async function getStaticProps(context: GetStaticPropsContext) {
	const { locale } = context
	const { projectCollection }: ProjectsCollection = await Contentful.request(
		getProjects,
		{
			locale
		}
	)

	return {
		props: {
			projects: projectCollection.items,
			...(await serverSideTranslations(locale as string, ['project']))
		},
		revalidate: 60 * 60 * 10 // 10 days
	}
}

type Props = {
	projects: IProject[]
}

export default function Projects({ projects }: Props) {
	const { t } = useTranslation('project')
	return (
		<UpDownMotion>
			<Title
				gradient={'cyanToGreen'}
				order={1}
				sx={() => ({
					fontSize: '3rem'
				})}
			>
				{t('title')}
			</Title>
			<Text>{t('description')}</Text>
			<Space h={60} />
			<ListOfProjects projects={projects} />
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
