import { Container, Space } from '@mantine/core'

import { Title } from '~/components'
import { ProjectList } from '~/components/ProjectList/ProjectList.component'

export default function ProjectsPage() {
	return (
		<Container mt={'xl'}>
			<Title
				title={'Work. Hobby. Open Source'}
				gradient={{ from: 'teal', to: 'green', deg: 150 }}
				order={1}
				size={'md'}
				subtitle={
					'Here you can navigate to all my different projects, apps, and libraries that I helped in some way. Some of them are still active, others have been discontinued'
				}
			/>

			<Space h={'xl'} />
			<Title
				title={'Feature Projects'}
				order={3}
				size={'sm'}
				subtitle={
					'I pride myself on my ability to adapt to the unique needs of any project. Whether it’s reducing costs through process automation, improving efficiency through the development of productivity tools or even creating new digital experiences for your brand.'
				}
			/>

			<Space h={'xl'} />

			<ProjectList isFeature={true} />

			<Space h={60} />
			<Title
				title={'All Projects'}
				order={3}
				subtitle={'Some projects are under NDA so they cannot be listed.'}
				size={'xs'}
			/>

			<Space h={'xl'} />
			<ProjectList isFeature={false} />
		</Container>
	)
}
