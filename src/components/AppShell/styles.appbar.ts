import { createStyles } from '@mantine/core'

interface Props {
	isDrawerStyle: boolean
}

export default createStyles((theme, { isDrawerStyle = false }: Props) => ({
	container: {
		paddingTop: 12,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	nav: {
		textAlign: 'center',
		cursor: 'pointer',

		'& ul': {
			margin: 0,
			padding: 0,
			listStyle: 'none',
			display: 'flex',
			position: 'relative',
			textAlign: 'center',
			flexDirection: isDrawerStyle ? 'column' : 'row'
		},

		'& a': {
			textDecoration: 'none',
			margin: '0 16px',
			padding: 12,
			transition: 'all 0.3s ease-in-out',
			display: 'inline-block',
			position: 'relative',
			color:
				theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.dark,

			'&.active': {
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
							? theme.colors.orange[5]
							: theme.colors.orange[9]
				}
			},

			'&:hover': {
				color:
					theme.colorScheme === 'dark'
						? theme.colors.gray[1]
						: theme.colors.dark[1]
			}
		}
	}
}))
