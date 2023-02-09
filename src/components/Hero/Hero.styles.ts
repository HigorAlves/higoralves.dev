import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
	wrapper: {
		display: 'flex',
		position: 'relative',
		height: 'calc(100vh - 600px)',
		alignItems: 'center'
	},

	inner: {
		zIndex: 1
	},

	innerImage: {
		zIndex: 1,
		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			display: 'none'
		}
	},

	dots: {
		position: 'absolute',
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[5]
				: theme.colors.gray[1],

		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			display: 'none'
		}
	}
}))
