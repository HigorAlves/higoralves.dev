import { createStyles } from '@mantine/core'

export default createStyles(theme => ({
	container: {
		height: 130,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	},
	nav: {
		textAlign: 'center',

		'& ul': {
			margin: 0,
			padding: 0,
			listStyle: 'none',
			display: 'inline-flex',
			position: 'relative',
			textAlign: 'center'
		},

		'& a': {
			textDecoration: 'none',
			margin: '0 16px',
			padding: 12,
			fontWeight: 'bold',
			transition: 'all 0.3s ease-in-out',
			display: 'inline-block',
			position: 'relative',
			color:
				theme.colorScheme === 'dark'
					? theme.colors.gray[5]
					: theme.colors.dark[5],

			'&.active': {
				color:
					theme.colorScheme === 'dark'
						? theme.colors.yellow[5]
						: theme.colors.yellow[9],
				'&:after': {
					content: `""`,
					position: 'absolute',
					width: '30%',
					height: 1,
					bottom: 10,
					left: '35%',
					transformOrigin: 'bottom right',
					backgroundColor:
						theme.colorScheme === 'dark'
							? theme.colors.yellow[5]
							: theme.colors.yellow[9]
				}
			},

			'&:hover': {
				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.colors.dark[5]
						: theme.colors.gray[1],
				color:
					theme.colorScheme === 'dark'
						? theme.colors.yellow[4]
						: theme.colors.yellow[9],
				borderRadius: 4
			}
		}
	}
}))
