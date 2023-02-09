import {
	Avatar,
	Badge,
	createStyles,
	Paper,
	Text,
	ThemeIcon
} from '@mantine/core'
import { IconThumbUp } from '@tabler/icons'

const ICON_SIZE = 20

const useStyles = createStyles(theme => ({
	card: {
		position: 'relative',
		overflow: 'visible',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing.xl,
		paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 2
	},

	icon: {
		position: 'absolute',
		top: -ICON_SIZE / 3,
		left: `calc(50% - ${ICON_SIZE / 2}px)`
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1
	}
}))

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
