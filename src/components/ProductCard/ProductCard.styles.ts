import { createStyles } from '@mantine/core'

export const ICON_SIZE = 20

export const useStyles = createStyles(theme => ({
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
