import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
	image: {
		borderRadius: '10px'
	},
	imageWrapper: {
		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			display: 'none'
		},
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			display: 'none'
		}
	}
}))
