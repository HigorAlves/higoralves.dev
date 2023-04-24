import { createStyles, rem } from '@mantine/core'

export const useStyles = createStyles(theme => ({
	card: {
		position: 'relative',
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black
	},

	badge: {
		position: 'absolute',
		zIndex: 1,
		right: rem(theme.spacing.md),
		top: rem(theme.spacing.sm)
	},

	footer: {
		padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
		marginTop: theme.spacing.md,
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
		}`
	}
}))
