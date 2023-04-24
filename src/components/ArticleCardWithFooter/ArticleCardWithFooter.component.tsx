import {
	Card,
	Image,
	ActionIcon,
	Group,
	Text,
	Avatar,
	Badge
} from '@mantine/core'
import { IconHeart, IconBookmark, IconShare } from '@tabler/icons-react'

import { useStyles } from '~/components/ArticleCardWithFooter/ArticleCardWithFooter.styles'

interface ArticleCardFooterProps {
	image: string
	category: string
	title: string
	footer: string
	description: string
}

export function ArticleCardFooter({
	image,
	category,
	title,
	footer
}: ArticleCardFooterProps) {
	const { classes, theme } = useStyles()
	const author = {
		image: 'https://avatars.githubusercontent.com/u/11262976?v=4',
		name: 'Higor Alves'
	}

	return (
		<Card withBorder padding='lg' radius='md' className={classes.card}>
			<Card.Section mb='sm'>
				<Badge variant={'filled'} color={'orange'} className={classes.badge}>
					{category}
				</Badge>
				<Image src={image} alt={title} height={180} />
			</Card.Section>

			<Text fw={700} className={classes.title} mt='xs'>
				{title}
			</Text>

			<Text fw={400} size={'sm'} c={'dimmed'}>
				{title}
			</Text>

			<Card.Section className={classes.footer}>
				<Group position='apart'>
					<Group>
						<Avatar src={author.image} radius='xl' size={'sm'} />
						<Text fw={400} size={'sm'}>
							{author.name}
						</Text>
					</Group>
					<Group spacing={0}>
						<ActionIcon>
							<IconHeart
								size='1.2rem'
								color={theme.colors.red[6]}
								stroke={1.5}
							/>
						</ActionIcon>
						<ActionIcon>
							<IconBookmark
								size='1.2rem'
								color={theme.colors.yellow[6]}
								stroke={1.5}
							/>
						</ActionIcon>
						<ActionIcon>
							<IconShare
								size='1.2rem'
								color={theme.colors.blue[6]}
								stroke={1.5}
							/>
						</ActionIcon>
					</Group>
				</Group>
			</Card.Section>
		</Card>
	)
}
