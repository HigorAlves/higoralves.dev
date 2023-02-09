import { Badge, Card as Base, Group, Space, Text } from '@mantine/core'
import Image, { StaticImageData } from 'next/image'

import { useStyles } from './Card.styles'

export interface IBadgeCardProps {
	image?: StaticImageData
	title: string
	jobTitle: string
	company: string
	description: string
	isFeature?: boolean
}

export function Card({
	image,
	title,
	description,
	company,
	jobTitle
}: IBadgeCardProps) {
	const { classes } = useStyles()

	return (
		<Base withBorder radius='md' p='md' className={classes.card}>
			{image && (
				<Base.Section style={{ position: 'relative', height: 300 }}>
					<Image src={image} alt={title} fill />
				</Base.Section>
			)}

			<Base.Section className={classes.section} mt='md'>
				{!image && <Space h={'xs'} />}
				<Group position='apart'>
					<Text size='lg' weight={500} m={0}>
						{title}
					</Text>
					<Badge size='sm'>{company}</Badge>
				</Group>
				<Text size='sm' weight={300}>
					{jobTitle}
				</Text>

				<Text size='sm' mt='xs' lineClamp={4}>
					{description}
				</Text>
			</Base.Section>
		</Base>
	)
}
