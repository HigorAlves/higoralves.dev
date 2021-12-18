import React from 'react'

import { Col, Container, Grid, Space, Text } from '@mantine/core'
// @ts-ignore
import { GetServerSideProps } from 'next'
import Image from 'next/image'

import { Title } from '~/components'
import {
	default as Contentful,
	getProject,
	IProject
} from '~/services/Contentful'

// @ts-ignore
export const getServerSideProps: GetServerSideProps = async context => {
	const { locale, params } = context
	const slug = params.slug
	const { projectCollection } = await Contentful.request(getProject, {
		locale,
		slug
	})

	const project = projectCollection.items[0]
	return {
		props: {
			project
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
			<Text mt={'xl'}>{project.description}</Text>
			<Space h={60} />
			<Title order={3} mb={'xl'}>
				Technologies used
			</Title>
			<Grid>
				{project.technologiesCollection?.items.map(tech => (
					<Col span={12} md={1} lg={2} key={tech.name}>
						<Image
							src={tech.icon.url}
							width={30}
							height={20}
							layout={'responsive'}
							alt={tech.icon.title}
							objectFit={'fill'}
							objectPosition={'center'}
						/>
						<Text mt={'lg'} align={'center'}>
							{tech.name}
						</Text>
					</Col>
				))}
			</Grid>
		</Container>
	)
}
