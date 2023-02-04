import { Text, Title } from '@mantine/core'

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
		</>
	)
}
