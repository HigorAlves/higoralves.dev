import { createStyles } from '@mantine/core'

export default createStyles(theme => {
	return {
		wrapper: {
			cursor: 'pointer'
		},
		imageWrapper: {
			position: 'relative',
			overflow: 'hidden',
			border: '3px solid transparent',
			borderRadius: '6px',
			transition: 'all 0.2s ease-in-out',
			'&:hover': {
				border: `3px solid ${theme.colors.orange[6]}`
			}
		}
	}
})
