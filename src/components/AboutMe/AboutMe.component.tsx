import { Grid, Text, Title } from '@mantine/core'
import { Title as BaseTitle } from '@mantine/core/lib/Title/Title'
import Image from 'next/image'

import ABOUT_ME from '~/assets/images/me/about-me.jpeg'

import { useStyles } from './AboutMe.styles'

export function AboutMe() {
	const { classes } = useStyles()
	return (
		<Grid mt={40}>
			<Grid.Col lg={5} className={classes.imageWrapper}>
				<Image
					src={ABOUT_ME}
					alt={'Higor Alves profile picture'}
					height={330}
					className={classes.image}
				/>
			</Grid.Col>

			<Grid.Col sm={12} lg={6}>
				<Title order={2} mb={'sm'}>
					🍀 Hey Folks
				</Title>

				<Text>
					Hey, I&apos;m Higor Alves, I started as a Developer back in 2015,
					working with C.
					<br />
					<br />
					Early on in my career I decided I wanted to be an expert. So I set my
					mind on mastering the world&apos;s most popular programming language.
					I spent countless hours writing JavaScript for the companies I worked
					for as well as in the evenings for open source and other side
					projects.
					<br />
					<br />
					When I&apos;m not programming, you can find me playing PS5, traveling
					and doing bbq!
				</Text>
			</Grid.Col>
		</Grid>
	)
}
