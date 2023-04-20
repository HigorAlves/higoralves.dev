import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
	footer: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		padding: 10,
		maxHeight: 60,
		borderTop: `1px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
		}`,
		background: theme.colors.dark[7]
	},

	links: {
		[theme.fn.smallerThan('sm')]: {
			marginTop: theme.spacing.lg,
			marginBottom: theme.spacing.sm
		}
	}
}))
