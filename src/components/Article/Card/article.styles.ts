import { createStyles } from '@mantine/core'

export default createStyles(() => ({
	article: {
		position: 'relative'
	},
	imageWrapper: {
		borderRadius: 6,
		overflow: 'hidden'
	},
	paper: {
		position: 'absolute',
		top: 140,
		width: '96%',
		marginLeft: '2%'
	}
}))
