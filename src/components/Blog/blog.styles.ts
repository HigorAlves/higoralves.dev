import { createStyles } from '@mantine/core'

export default createStyles(theme => {
	return {
		wrapper: {
			backgroundColor:
				theme.colorScheme === 'dark' ? theme.colors.dark : '#f8f8fb',
			borderRadius: 10,
			position: 'relative'
		},
		image: {},
		paper: {
			backgroundColor:
				theme.colorScheme === 'dark' ? theme.colors.dark : '#f8f8fb'
		}
	}
})
