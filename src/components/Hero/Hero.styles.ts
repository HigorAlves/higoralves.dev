import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
	wrapper: {
		display: 'flex',
		position: 'relative',
		height: 'calc(100vh - 600px)',
		alignItems: 'center'
	},

	inner: {
		position: 'relative',
		zIndex: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},

	dots: {
		position: 'absolute',
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[5]
				: theme.colors.gray[1],

		'@media (max-width: 755px)': {
			display: 'none'
		}
	}
}))
