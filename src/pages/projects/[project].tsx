import { Carousel } from '@mantine/carousel'
import Image from 'next/image'

import { Title } from '~/components'
import { HtmlIcon } from '~/components/TechCard/HtmlIcon'
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
					<Image src={PROJECTS[0].image} alt={'test'} fill />
				</Carousel.Slide>
				<Carousel.Slide ml={10}>
					<Image src={PROJECTS[1].image} alt={'test'} fill />
				</Carousel.Slide>
				<Carousel.Slide ml={10}>
					<Image src={PROJECTS[1].image} alt={'test'} fill />
				</Carousel.Slide>
				<Carousel.Slide ml={10}>
					<Image src={PROJECTS[1].image} alt={'test'} fill />
				</Carousel.Slide>
			</Carousel>

			<Title
				title={'SnapStrat'}
				order={1}
				gradient={{ from: 'green', to: 'orange', deg: 150 }}
			/>

			<HtmlIcon />
		</>
	)
}
