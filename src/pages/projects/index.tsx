import React from 'react'

import { Col, Grid, Space, Text } from '@mantine/core'
import { motion } from 'framer-motion'
// @ts-ignore
import { GetStaticPropsContext } from 'next'

import { Project, Title } from '~/components'
import { Meta } from '~/layouts'
import { containerVariants, itemVariants } from '~/layouts/animation'
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
		<motion.section
			initial={'hidden'}
			animate={'visible'}
			exit={'exit'}
			variants={containerVariants}
		>
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
				{projects.map(project => (
					<Col span={12} md={6} lg={4} key={project.slug}>
						<motion.div
							variants={itemVariants}
							initial={'hidden'}
							animate={'visible'}
							exit={'exit'}
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
		</motion.section>
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
