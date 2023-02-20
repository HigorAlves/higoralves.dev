import { Grid, Space } from '@mantine/core'

import { Title } from '~/components'
import { Card, IBadgeCardProps } from '~/components/Card/Card.component'
import { PROJECTS } from '~/utils/projects'

export default function ProjectsPage() {
	function renderProjects(isFeature: boolean) {
		return PROJECTS.map((project: IBadgeCardProps) => {
			if (project.isFeature === isFeature) {
				return (
					<Grid.Col key={project.title} sm={12} md={4} lg={4}>
						<Card {...project} />
					</Grid.Col>
				)
			}
		})
	}

	return (
		<>
			<Title
				title={'Work. Hobby. Open Source'}
				gradient={{ from: 'teal', to: 'green', deg: 150 }}
				order={1}
				subtitle={
					'Here you can navigate to all my different projects, apps, and libraries that I helped in some way. Some of them are still active, others have been discontinued'
				}
			/>

			<Space h={'xl'} />
			<Title
				title={'Feature Projects'}
				order={3}
				subtitle={
					'I pride myself on my ability to adapt to the unique needs of any project. Whether it’s reducing costs through process automation, improving efficiency through the development of productivity tools or even creating new digital experiences for your brand.'
				}
			/>

			<Space h={'xl'} />

			<Grid>{renderProjects(true)}</Grid>

			<Space h={60} />
			<Title
				title={'All Projects'}
				order={3}
				subtitle={'Some projects are under NDA so they cannot be listed.'}
			/>

			<Space h={'xl'} />
			<Grid>{renderProjects(false)}</Grid>
		</>
	)
}
