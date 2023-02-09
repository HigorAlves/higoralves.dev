import { Avatar, Badge, Paper, Text, ThemeIcon } from '@mantine/core'
import { IconThumbUp } from '@tabler/icons'

import { ICON_SIZE, useStyles } from './ProductCard.styles'

interface IProductCard {
	name: string
	avatar: string
	votes: number
	description: string
}

export function ProductCard({
	name,
	avatar,
	votes,
	description
}: IProductCard) {
	const { classes } = useStyles()

	return (
		<Paper radius='md' withBorder className={classes.card} mt={ICON_SIZE}>
			<ThemeIcon className={classes.icon}>
				<Avatar src={avatar} radius={'sm'} size={'lg'} />
			</ThemeIcon>

			<Text align='center' weight={700} className={classes.title}>
				{name}
			</Text>
			<Text color='dimmed' align='center' size='sm'></Text>

			<Badge
				size='md'
				mt={'xl'}
				mb={'xl'}
				leftSection={<IconThumbUp size={20} />}
			>
				{votes} Votes
			</Badge>

			<Text color='dimmed' align='center' size='xs' lineClamp={2}>
				{description}
			</Text>
		</Paper>
	)
}
