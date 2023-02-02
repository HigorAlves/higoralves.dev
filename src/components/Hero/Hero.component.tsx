import { Container, Text, Title } from '@mantine/core'

import { Dots } from '~/components/Icons'

import { useStyles } from './Hero.styles'

export function HeroText() {
	const { classes } = useStyles()

	return (
		<Container className={classes.wrapper}>
			<Dots className={classes.dots} style={{ left: 0, top: 200 }} />
			<Dots className={classes.dots} style={{ left: 60, top: 290 }} />
			<Dots className={classes.dots} style={{ left: 0, top: 240 }} />
			<Dots className={classes.dots} style={{ right: 0, top: 260 }} />

			<div className={classes.inner}>
				<Title
					variant='gradient'
					gradient={{ from: 'indigo', to: 'grape', deg: 150 }}
					ta='left'
					order={1}
					size={48}
				>
					Higor Alves
				</Title>
				<Text ta={'left'} size='lg' color='white' weight={300} mt={10}>
					Software Engineer
				</Text>
				<Text ta={'left'} size='lg' color='dimmed' weight={300}>
					Helping companies make the world a better place through quality
					software.
				</Text>
			</div>
		</Container>
	)
}
