import React from 'react'

import { Col, Grid } from '@mantine/core'
import { motion } from 'framer-motion'

import { Project } from '~/components'
import { ProjectsQuery } from '~/graphql/generated/graphql'

export function ListOfProjects(projectsQuery: ProjectsQuery) {
	return (
		<Grid gutter={26}>
			{projectsQuery.projects.map((project, index) => (
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
							city={project.city}
							description={project.body.text}
							cover={project.cover.url}
							role={project.role}
						/>
					</motion.div>
				</Col>
			))}
		</Grid>
	)
}
