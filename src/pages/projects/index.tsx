import { Grid, Space, Text, Title } from '@mantine/core'

import { BadgeCard, IBadgeCardProps } from '~/components/Card/Card.component'

const PROJECTS: Array<IBadgeCardProps> = [
	{
		title: 'Bubbles',
		company: 'Notch Team',
		jobTitle: 'Senior Software Engineer',
		image:
			'https://www.higoralves.dev/_next/image/?url=https%3A%2F%2Fmedia.graphassets.com%2Foutput%3Dformat%3Awebp%2FCQyHrCIRZCjsNnU8GeVA&w=3840&q=75',
		description:
			'Collaborate using screen, video, and audio messages so you can work on your own time. No account or installation needed'
	}
]

export default function ProjectsPage() {
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

			<Grid>
				{PROJECTS.map((project: IBadgeCardProps) => (
					<Grid.Col key={project.title} sm={12} md={4} lg={4}>
						<BadgeCard {...project} />
					</Grid.Col>
				))}
			</Grid>

			<Space h={60} />
			<Title order={3} ta='left'>
				All Projects
			</Title>
			<Text ta={'left'} size='xs' color='dimmed' weight={300}>
				Some projects are under NDA so they cannot be listed.
			</Text>
			<Space h={'xl'} />
			<Space h={'xl'} />
		</>
	)
}
