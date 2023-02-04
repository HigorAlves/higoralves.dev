import { Badge, Card, Group, Image, Text } from '@mantine/core'

import { useStyles } from './Card.styles'

export interface IBadgeCardProps {
	image: string
	title: string
	jobTitle: string
	company: string
	description: string
	isFeature?: boolean
}

export function BadgeCard({
	image,
	title,
	description,
	company,
	jobTitle
}: IBadgeCardProps) {
	const { classes } = useStyles()

	return (
		<Card withBorder radius='md' p='md' className={classes.card}>
			<Card.Section>
				<Image src={image} alt={title} height={180} />
			</Card.Section>

			<Card.Section className={classes.section} mt='md'>
				<Group position='apart'>
					<Text size='lg' weight={500} m={0}>
						{title}
					</Text>
					<Badge size='sm'>{company}</Badge>
				</Group>
				<Text size='sm' weight={300}>
					{jobTitle}
				</Text>

				<Text size='sm' mt='xs' lineClamp={3}>
					{description}
				</Text>
			</Card.Section>
		</Card>
	)
}
