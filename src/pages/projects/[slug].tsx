import React from 'react'

import {
	Col,
	Container,
	Grid,
	Group,
	Space,
	Text,
	ThemeIcon
} from '@mantine/core'
import {
	BriefcaseIcon,
	GlobeIcon,
	LocationIcon,
	OrganizationIcon,
	RubyIcon
} from '@primer/octicons-react'
import { GraphQLClient } from 'graphql-request'
import { GetStaticPropsContext } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Image from 'next/image'

import { Link, Technology, Title } from '~/components'
import { Locale, ProjectQuery } from '~/graphql/generated/graphql'
import { projectQuery, projectsQuery } from '~/services/queries'

const componentsMap = {
	p: (props: { children: React.ReactChild }) => (
		<Text mt={'xl'}>{props.children}</Text>
	),
	h2: (props: { children: string }) => (
		<Title order={2} mt={'md'}>
			{props.children}
		</Title>
	),
	h3: (props: { children: string }) => (
		<Title order={3} mt={'md'}>
			{props.children}
		</Title>
	)
}

export async function getStaticPaths() {
	const graphcmsURL = process.env.NEXT_PUBLIC_GRAPHCMS_URL as string
	const client = new GraphQLClient(graphcmsURL)
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
	const graphcmsURL = process.env.NEXT_PUBLIC_GRAPHCMS_URL as string
	const client = new GraphQLClient(graphcmsURL)
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
		<>
			{data && (
				<Container>
					<div style={{ borderRadius: '8px', overflow: 'hidden' }}>
						<Image
							src={data.cover.url}
							width={1920}
							height={1080}
							layout={'responsive'}
							alt={data.cover.id}
							objectFit={'cover'}
							objectPosition={'center'}
						/>
					</div>
					<Title mt={'xl'} align={'center'} white>
						{data.title as string}
					</Title>

					<MDXRemote {...(source as any)} components={componentsMap} />

					<section>
						<Space h={30} />
						<Title order={2} mb={'sm'}>
							Details
						</Title>
						<Grid>
							<Col span={12} md={3} lg={3}>
								<Group>
									<ThemeIcon color='yellow' size={24} radius='xl'>
										<RubyIcon size={12} />
									</ThemeIcon>
									<Text>{data.company}</Text>
								</Group>
							</Col>
							<Col span={12} md={4} lg={3}>
								<Group>
									<ThemeIcon color='yellow' size={24} radius='xl'>
										<OrganizationIcon size={12} />
									</ThemeIcon>
									<Text>{data.industry}</Text>
								</Group>
							</Col>
							<Col span={12} md={4} lg={3}>
								<Group>
									<ThemeIcon color='yellow' size={24} radius='xl'>
										<BriefcaseIcon size={12} />
									</ThemeIcon>
									<Text>{data.role}</Text>
								</Group>
							</Col>
							<Col span={12} md={4} lg={3}>
								<Group>
									<ThemeIcon color='yellow' size={24} radius='xl'>
										<LocationIcon size={12} />
									</ThemeIcon>
									<Text>{data.country}</Text>
								</Group>
							</Col>
							<Col span={12} md={4} lg={3}>
								<Group>
									<ThemeIcon color='yellow' size={24} radius='xl'>
										<GlobeIcon size={12} />
									</ThemeIcon>
									<Link href={data.website as string} target={'_blank'}>
										<Text color={'yellow'}>Official Website</Text>
									</Link>
								</Group>
							</Col>
						</Grid>
					</section>

					<Space h={30} />
					<Title order={3} mb={'xl'}>
						Technologies used
					</Title>

					<Grid gutter={20}>
						{data.technologies.map(tech => (
							<Col span={12} md={1} lg={2} key={tech.name}>
								<Technology
									icon={tech.icon?.url as string}
									name={tech.name as string}
								/>
							</Col>
						))}
					</Grid>
				</Container>
			)}
		</>
	)
}
