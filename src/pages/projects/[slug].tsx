import React from 'react'

import { Container, Space } from '@mantine/core'
import { GraphQLClient } from 'graphql-request'
import { GetStaticPropsContext } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import { componentsMap } from '~/components'
import { GRAPH_CMS } from '~/config/constants'
import {
	ProjectDetails,
	ProjectHeader,
	ProjectTechnologies
} from '~/containers'
import { Locale, ProjectQuery } from '~/graphql/generated/graphql'
import { projectQuery, projectsQuery } from '~/services/queries'

export async function getStaticPaths() {
	const client = new GraphQLClient(GRAPH_CMS.URL)
	const data = await client.request(projectsQuery)

	return {
		paths: data.projects.map((project: { slug: string }) => ({
			params: { slug: project.slug }
		})),
		fallback: false
	}
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const { locale, params } = context
	const slug = params?.slug as string
	const language = locale === 'en' ? Locale.En : Locale.Br
	const client = new GraphQLClient(GRAPH_CMS.URL)
	const data: ProjectQuery = await client.request(projectQuery, {
		locale: language,
		slug
	})
	const source = await serialize(data.projects[0].body.markdown)

	return {
		props: {
			project: data,
			source
		},
		revalidate: 60 * 60 * 10
	}
}

type Props = {
	project: ProjectQuery
	source: string
}

export default function Project({ project, source }: Props) {
	const data = project.projects[0]

	return (
		data && (
			<Container>
				<ProjectHeader title={data.title} cover={data.cover} />
				<MDXRemote {...(source as any)} components={componentsMap} />

				<section>
					<Space h={30} />
					<ProjectDetails {...data} />
				</section>
				<section>
					<Space h={30} />
					<ProjectTechnologies technologies={data.technologies} />
				</section>
			</Container>
		)
	)
}
