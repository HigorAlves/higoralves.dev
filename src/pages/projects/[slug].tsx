import React from 'react'

import { Col, Container, Grid, Space, Text } from '@mantine/core'
// @ts-ignore
import { GetServerSideProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Image from 'next/image'

import { Technology, Title } from '~/components'
import {
	default as Contentful,
	getProject,
	IProject
} from '~/services/Contentful'

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

// @ts-ignore
export const getServerSideProps: GetServerSideProps = async context => {
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
		}
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
