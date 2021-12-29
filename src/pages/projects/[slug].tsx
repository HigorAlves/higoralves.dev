import React from 'react'

import { Col, Container, Grid, Space, Text } from '@mantine/core'
// @ts-ignore
import { GetStaticPropsContext } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Image from 'next/image'

import { Technology, Title } from '~/components'
import {
	default as Contentful,
	getProject,
	getProjectsPaths,
	IProject
} from '~/services/Contentful'

interface Path {
	params: {
		slug: string
	}
	locale: 'pt-BR' | 'en-US'
}

const components = {
	p: (props: { children: React.ReactChild }) => (
		<Text mt={'xl'}>{props.children}</Text>
	),
	h1: (props: { children: string }) => (
		<Title order={1}>{props.children}</Title>
	),
	h2: (props: { children: string }) => (
		<Title order={2}>{props.children}</Title>
	),
	h3: (props: { children: string }) => (
		<Title order={3}>{props.children}</Title>
	),
	h4: (props: { children: string }) => <Title order={4}>{props.children}</Title>
}

export async function getStaticPaths() {
	const { projectCollection } = await Contentful.request(getProjectsPaths)

	const slugs = projectCollection.items
	const paths: Path[] = []
	slugs.forEach((item: { slug: string }) => {
		paths.push({ params: { slug: item.slug }, locale: 'en-US' })
		paths.push({ params: { slug: item.slug }, locale: 'pt-BR' })
	})

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const { locale, params } = context
	const slug = params.slug
	const { projectCollection } = await Contentful.request(getProject, {
		locale,
		slug
	})

	const project: IProject = projectCollection.items[0]
	const mdxSource = await serialize(project.description)

	return {
		props: {
			project: {
				...project,
				source: mdxSource
			}
		},
		revalidate: 60 * 60 * 10
	}
}

type Props = {
	project: IProject
}

export default function Project({ project }: Props) {
	return (
		<Container>
			<div style={{ borderRadius: '8px', overflow: 'hidden' }}>
				<Image
					src={project.cover.url}
					width={1920}
					height={1080}
					layout={'responsive'}
					alt={project.cover.title}
					objectFit={'cover'}
					objectPosition={'center'}
				/>
			</div>
			<Title mt={'xl'} align={'center'} white>
				{project.title as string}
			</Title>

			<MDXRemote {...(project.source as any)} components={components} />

			<Space h={60} />
			<Title order={3} mb={'xl'}>
				Technologies used
			</Title>

			<Grid gutter={20}>
				{project.technologiesCollection?.items.map(tech => (
					<Col span={12} md={1} lg={2} key={tech.name}>
						<Technology icon={tech.icon} name={tech.name} />
					</Col>
				))}
			</Grid>
		</Container>
	)
}
