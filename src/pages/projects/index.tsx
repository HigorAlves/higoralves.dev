import React from 'react'

import { Col, Container, Grid, Space, Text } from '@mantine/core'

import { Project, Title } from '~/components'
import {
	default as Contentful,
	getProjects,
	IProject,
	ProjectsCollection
} from '~/services/Contentful'

export const getServerSideProps = async (context: { locale: any }) => {
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
		}
	}
}

type Props = {
	projects: IProject[]
}

export default function Index({ projects }: Props) {
	return (
		<section data-testid={'section-projects'}>
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
						<Project
							title={project.title}
							company={project.company}
							slug={project.slug}
							country={project.country}
							description={project.description}
							cover={project.cover}
						/>
					</Col>
				))}
			</Grid>
		</section>
	)
}
