import { Badge, Card as Base, Group, Space, Text } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'

import { ProjectType } from '~/types/projects'

import { useStyles } from './ProjectCard.styles'

export function ProjectCard({
	title,
	description,
	company,
	thumbnail,
	slug
}: ProjectType) {
	const { classes } = useStyles()

	return (
		<Link href={slug}>
			<Base withBorder radius='md' p='md' className={classes.card}>
				{!!thumbnail && (
					<Base.Section style={{ position: 'relative', height: 300 }}>
						<Image src={thumbnail} alt={title} fill />
					</Base.Section>
				)}

				<Base.Section className={classes.section} mt='md'>
					{!thumbnail && <Space h={'xs'} />}
					<Group position='apart'>
						<Text size='lg' weight={500} m={0}>
							{title}
						</Text>
						<Badge size='sm'>{company.name}</Badge>
					</Group>
					<Text size='sm' weight={300}>
						{company.job}
					</Text>

					<Text size='sm' mt='xs' lineClamp={4}>
						{description}
					</Text>
				</Base.Section>
			</Base>
		</Link>
	)
}
