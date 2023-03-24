import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
	footer: {
		gridArea: 'footer',
		display: 'flex',
		justifyContent: 'space-around',
		marginTop: 60,
		padding: 10,
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
