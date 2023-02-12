import {
	Blockquote,
	createStyles,
	Grid,
	Title,
	Timeline,
	Text
} from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'

import ABOUT_ME from '~/assets/images/me/about-me.jpeg'
import { COMPANIES } from '~/utils/companies'

const useStyles = createStyles(theme => ({
	image: {
		borderRadius: '10px'
	},
	imageWrapper: {
		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			display: 'none'
		},
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			display: 'none'
		}
	}
}))

export default function About() {
	const { classes } = useStyles()

	return (
		<>
			<div>
				<Title
					order={1}
					variant='gradient'
					gradient={{ from: 'pink', to: 'purple', deg: 150 }}
					ta='left'
				>
					Explore. Create. Share.
				</Title>
				<Text ta={'left'} size='lg' color='dimmed' weight={300}>
					I make the world a better place by teaching people like you how to
					make quality software.
				</Text>
			</div>

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
						Early on in my career I decided I wanted to be an expert. So I set
						my mind on mastering the world&apos;s most popular programming
						language. I spent countless hours writing JavaScript for the
						companies I worked for as well as in the evenings for open source
						and other side projects.
						<br />
						<br />
						When I&apos;m not programming, you can find me playing PS5,
						traveling and doing bbq!
					</Text>
				</Grid.Col>
			</Grid>

			<Title order={2} mt={'xl'}>
				Bio
			</Title>
			<Text color={'dimmed'} mb={'md'}>
				This is made for journalists, podcast hosts, and event organizers to
				copy-and-paste.
			</Text>
			<Blockquote>
				Higor Alves have a diverse background in software development and have
				worked on a variety of projects. His experience includes leading
				technical debt reduction efforts, creating design systems, developing
				APIs and cross-platform applications, and implementing automated tests
				and regression versions. He also worked on front-end development, user
				experience design, and improving performance and fixing bugs.
				Additionally, He have experience in migrating legacy codebases to more
				efficient microservices structures, which can improve system performance
				and maintainability.
			</Blockquote>

			<Title order={3}>Career</Title>
			<Timeline active={0} bulletSize={24} lineWidth={2} mt={'lg'}>
				{COMPANIES.map(
					company =>
						company.show && (
							<Timeline.Item
								key={company.name}
								bullet={<company.icon size={12} />}
								title={company.job}
							>
								<Text color='dimmed' size='sm'>
									<Link href={company.website} target={'_blank'}>
										<Text variant='link' component='span' inherit>
											{company.name}
										</Text>
									</Link>{' '}
									- {company.city}, {company.country}
								</Text>
								<Text size='xs' mt={4}>
									<>
										{company.startDate} - {company.endDate}
									</>
								</Text>
							</Timeline.Item>
						)
				)}
			</Timeline>
		</>
	)
}
