import {
	ActionIcon,
	Badge,
	Button,
	Card,
	Group,
	Image,
	Text
} from '@mantine/core'
import { IconHeart } from '@tabler/icons'

import { useStyles } from './Card.styles'

interface IBadge {
	emoji: string
	label: string
}

interface IBadgeCardProps {
	image: string
	title: string
	company: string
	description: string
	badges: Array<IBadge>
}

export function BadgeCard({
	image,
	title,
	description,
	company,
	badges
}: IBadgeCardProps) {
	const { classes, theme } = useStyles()

	const features = badges.map(badge => (
		<Badge
			color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
			key={badge.label}
			leftSection={badge.emoji}
		>
			{badge.label}
		</Badge>
	))

	return (
		<Card withBorder radius='md' p='md' className={classes.card}>
			<Card.Section>
				<Image src={image} alt={title} height={180} />
			</Card.Section>

			<Card.Section className={classes.section} mt='md'>
				<Group position='apart'>
					<Text size='lg' weight={500}>
						{title}
					</Text>
					<Badge size='sm'>{company}</Badge>
				</Group>
				<Text size='sm' mt='xs'>
					{description}
				</Text>
			</Card.Section>

			<Card.Section className={classes.section}>
				<Text mt='md' className={classes.label} color='dimmed'>
					Perfect for you, if you enjoy
				</Text>
				<Group spacing={7} mt={5}>
					{features}
				</Group>
			</Card.Section>

			<Group mt='xs'>
				<Button radius='md' style={{ flex: 1 }}>
					Show details
				</Button>
				<ActionIcon variant='default' radius='md' size={36}>
					<IconHeart size={18} className={classes.like} stroke={1.5} />
				</ActionIcon>
			</Group>
		</Card>
	)
}
