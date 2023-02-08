import { Grid, Space, Text, Title } from '@mantine/core'

import { BadgeCard, IBadgeCardProps } from '~/components/Card/Card.component'
import { PROJECTS } from '~/utils/projects'

export default function ProjectsPage() {
	function renderProjects(isFeature: boolean) {
		return PROJECTS.map((project: IBadgeCardProps) => {
			if (project.isFeature === isFeature) {
				return (
					<Grid.Col key={project.title} sm={12} md={4} lg={4}>
						<BadgeCard {...project} />
					</Grid.Col>
				)
			}
		})
	}

	return (
		<>
			<div>
				<Title
					order={1}
					variant='gradient'
					gradient={{ from: 'teal', to: 'green', deg: 150 }}
					ta='left'
				>
					Work. Hobby. Open Source
				</Title>
				<Text ta={'left'} size='lg' color='dimmed' weight={300}>
					Here you can navigate to all my different projects, apps, and
					libraries that I helped in some way. Some of them are still active,
					others have been discontinued
				</Text>
			</div>

			<Space h={'xl'} />

			<Title order={3} ta='left'>
				Feature Projects
			</Title>
			<Space h={'xl'} />

			<Grid>{renderProjects(true)}</Grid>

			<Space h={60} />
			<Title order={3} ta='left'>
				All Projects
			</Title>
			<Text ta={'left'} size='xs' color='dimmed' weight={300}>
				Some projects are under NDA so they cannot be listed.
			</Text>
			<Space h={'xl'} />
			<Grid>{renderProjects(false)}</Grid>
		</>
	)
}
