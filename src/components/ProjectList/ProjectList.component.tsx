import { memo } from 'react'

import { Grid } from '@mantine/core'

import { ProjectCard } from '~/components'
import { PROJECTS } from '~/utils/projects'

export function Component({ isFeature = false }) {
	const filteredProjects = PROJECTS.filter(
		project => project.isFeature === isFeature
	)

	return (
		<Grid>
			{filteredProjects.map(project => (
				<Grid.Col key={project.title} sm={12} md={4} lg={4}>
					<ProjectCard {...project} />
				</Grid.Col>
			))}
		</Grid>
	)
}

export const ProjectList = memo(Component)
