import {
	Blockquote,
	createStyles,
	Grid,
	Title,
	Timeline,
	Text
} from '@mantine/core'
import {
	IconGitBranch,
	IconGitPullRequest,
	IconGitCommit,
	IconMessageDots
} from '@tabler/icons'
import Image from 'next/image'

import ABOUT_ME from '~/assets/images/me/about-me.jpeg'

const useStyles = createStyles(() => ({
	image: {
		borderRadius: '10px'
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
					Explore. Create. Repeat
				</Title>
				<Text ta={'left'} size='lg' color='dimmed' weight={300}>
					Learn a little bit about me.
				</Text>
			</div>

			<Grid mt={40}>
				<Grid.Col sm={0} md={6} lg={6}>
					<Image
						src={ABOUT_ME}
						alt={'Higor Alves profile picture'}
						height={400}
						className={classes.image}
					/>
				</Grid.Col>

				<Grid.Col sm={12} md={4} lg={6}>
					<Title order={2} mb={'sm'}>
						🍀 Hey Folks
					</Title>

					<Text>
						I have a diverse background in software development and have worked
						on a variety of projects. My experience includes leading technical
						debt reduction efforts, creating design systems, developing APIs and
						cross-platform applications, and implementing automated tests and
						regression versions. I also worked on front-end development, user
						experience design, and improving performance and fixing bugs.
						Additionally, I have experience in migrating legacy codebases to
						more efficient microservices structures, which can improve system
						performance and maintainability.
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
			<Timeline active={1} bulletSize={24} lineWidth={2} mt={'lg'}>
				<Timeline.Item
					bullet={<IconGitBranch size={12} />}
					title='Software Engineer'
				>
					<Text color='dimmed' size='sm'>
						<Text variant='link' component='span' inherit>
							Edu Livre
						</Text>{' '}
						- Brasilia, Brazil
					</Text>
					<Text size='xs' mt={4}>
						Jan 2023 - Present
					</Text>
				</Timeline.Item>

				<Timeline.Item bullet={<IconGitCommit size={12} />} title='Commits'>
					<Text color='dimmed' size='sm'>
						You&apos;ve pushed 23 commits to
						<Text variant='link' component='span' inherit>
							fix-notifications branch
						</Text>
					</Text>
					<Text size='xs' mt={4}>
						52 minutes ago
					</Text>
				</Timeline.Item>

				<Timeline.Item
					title='Pull request'
					bullet={<IconGitPullRequest size={12} />}
					lineVariant='dashed'
				>
					<Text color='dimmed' size='sm'>
						You&apos;ve submitted a pull request
						<Text variant='link' component='span' inherit>
							Fix incorrect notification message (#187)
						</Text>
					</Text>
					<Text size='xs' mt={4}>
						34 minutes ago
					</Text>
				</Timeline.Item>

				<Timeline.Item
					title='Code review'
					bullet={<IconMessageDots size={12} />}
				>
					<Text color='dimmed' size='sm'>
						<Text variant='link' component='span' inherit>
							Robert Gluesticker
						</Text>{' '}
						left a code review on your pull request
					</Text>
					<Text size='xs' mt={4}>
						12 minutes ago
					</Text>
				</Timeline.Item>
			</Timeline>
		</>
	)
}
