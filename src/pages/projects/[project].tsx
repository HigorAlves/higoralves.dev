import { Carousel } from '@mantine/carousel'
import { Container, Space, Text } from '@mantine/core'
import Image from 'next/image'

import { SkillList, Title } from '~/components'
import { ProjectType } from '~/types/projects'
import { PROJECTS } from '~/utils/projects'

interface IProps {
	project: ProjectType
}

export default function ProjectPage({ project }: IProps) {
	return (
		<Container fluid mt={'xl'}>
			<Carousel
				height={400}
				slideSize='33%'
				slideGap={'xl'}
				loop
				align='center'
				mb={'xl'}
			>
				{project.carousel.map((image, index) => (
					<Carousel.Slide ml={10} key={index}>
						<Image src={image} alt={'Carousel image'} fill />
					</Carousel.Slide>
				))}
			</Carousel>

			<Container>
				<Title
					title={project.title}
					order={1}
					gradient={{ from: 'orange', to: 'blue', deg: 150 }}
				/>
				<Text fz={'xs'}>
					{project.company.address.city} - {project.company.address.country}
				</Text>
				<Space h='sm' />
				<Text fz={'sm'}>{project.description}</Text>

				<Space h='xl' />
				{project.about.split('\n').map((text, index) => (
					<Text key={index}>{text}</Text>
				))}
				<Space h='xl' />
				<Title title={'Technologies'} order={3} />
				<SkillList skills={project.skills} />
			</Container>
		</Container>
	)
}

export async function getStaticPaths() {
	const paths = PROJECTS.map(project => ({
		params: { project: project.id }
	}))

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({
	params
}: {
	params: { project: string }
}) {
	const project = PROJECTS.find(project => project.id === params.project)
	// @ts-ignore
	delete project.company.icon
	return {
		props: {
			project: PROJECTS.find(project => project.id === params.project)
		}
	}
}
