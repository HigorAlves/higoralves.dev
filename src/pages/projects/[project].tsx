import { Carousel } from '@mantine/carousel'
import { Space } from '@mantine/core'
import Image from 'next/image'

import { SkillList, Title } from '~/components'
import { PROJECTS } from '~/utils/projects'

export default function ProjectPage() {
	return (
		<>
			<Carousel
				height={400}
				slideSize='33%'
				slideGap={'xl'}
				loop
				align='center'
				mb={'xl'}
			>
				<Carousel.Slide ml={10}>
					<Image src={PROJECTS[0].thumbnail} alt={'test'} fill />
				</Carousel.Slide>
				<Carousel.Slide ml={10}>
					<Image src={PROJECTS[1].thumbnail} alt={'test'} fill />
				</Carousel.Slide>
				<Carousel.Slide ml={10}>
					<Image src={PROJECTS[1].thumbnail} alt={'test'} fill />
				</Carousel.Slide>
				<Carousel.Slide ml={10}>
					<Image src={PROJECTS[1].thumbnail} alt={'test'} fill />
				</Carousel.Slide>
			</Carousel>

			<Title
				title={'SnapStrat'}
				order={1}
				gradient={{ from: 'green', to: 'orange', deg: 150 }}
			/>

			<Space h='xl' />
			<Title title={'Technologies'} order={3} />
			<SkillList skills={['aws', 'awsec2', 'auth0']} />
		</>
	)
}