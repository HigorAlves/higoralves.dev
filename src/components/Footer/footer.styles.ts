import { createStyles } from '@mantine/core'

export default createStyles(theme => {
	return {
		wrapper: {
			display: 'flex',
			justifyContent: 'space-around',
			alignItems: 'center',

			ul: {
				listStyle: 'none',
				cursor: 'pointer',

				li: {
					display: 'inline',
					margin: '0 14px',
					color:
						theme.colorScheme === 'dark'
							? theme.colors.gray[5]
							: theme.colors.dark[5],

					'&:hover': {
						color:
							theme.colorScheme === 'dark'
								? theme.colors.gray[1]
								: theme.colors.dark[1]
					}
				}
			}
		}
	}
})
