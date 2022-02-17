import React from 'react'

import { Col, Grid, Space, Text } from '@mantine/core'
import { motion } from 'framer-motion'
import { GetStaticPropsContext } from 'next'

import { Project, Title, UpDownMotion } from '~/components'
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
			projects: projectCollection.items
		},
		revalidate: 60 * 60 * 10 // 10 days
	}
}

type Props = {
	projects: IProject[]
}

export default function Projects({ projects }: Props) {
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
				been discontinued.
			</Text>
			<Space h={60} />
			<Grid gutter={26}>
				{projects.map((project, index) => (
					<Col span={12} md={6} lg={4} key={project.slug}>
						<motion.div
							initial={{
								opacity: 0,
								y: -30
							}}
							animate={{
								opacity: 1,
								y: 0,
								transition: {
									delay: 0.2 + index / 5
								}
							}}
							exit={{
								opacity: 0,
								y: -30
							}}
						>
							<Project
								title={project.title}
								company={project.company}
								slug={project.slug}
								country={project.country}
								description={project.description}
								cover={project.cover}
								role={project.role}
							/>
						</motion.div>
					</Col>
				))}
			</Grid>
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
