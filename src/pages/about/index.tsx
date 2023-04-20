import { Container, Space } from '@mantine/core'

import { Title, AboutMe, Bio, Career } from '~/components'

export default function About() {
	return (
		<Container mt={'xl'}>
			<Title
				gradient={{ from: 'pink', to: 'purple', deg: 150 }}
				title={'Explore. Create. Share.'}
				order={1}
				subtitle={
					'I make the world a better place by teaching people like you how to make quality software.'
				}
			/>

			<AboutMe />
			<Space h={40} />
			<Bio />
			<Space h={40} />
			<Career />
		</Container>
	)
}
