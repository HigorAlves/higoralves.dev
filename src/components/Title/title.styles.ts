import { createStyles } from '@mantine/core'

const colors = {
	yellow: '#ffff80',
	pink: '#ff80bf',
	purple: '#9580ff',
	red: '#ff9580',
	orange: '#ffca80',
	green: '#8aff80',
	cyan: '#80ffea',
	grape: '#be4bdb'
}

const gradientDegree = '135deg'

export const useClasses = createStyles(theme => ({
	base: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[9]
	},
	light: {
		fontWeight: 300
	},
	gradientYellowToPink: {
		background: `linear-gradient(${gradientDegree}, ${colors.yellow} 0%, ${colors.pink} 100%)`,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent'
	},
	gradientGrapeToPink: {
		background: `linear-gradient(${gradientDegree}, ${colors.grape} 0%, ${colors.pink} 100%)`,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent'
	},
	gradientPurpleCyan: {
		background: `linear-gradient(${gradientDegree}, ${colors.purple} 0%, ${colors.cyan} 100%)`,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent'
	},
	gradientPinkPurple: {
		background: `linear-gradient(${gradientDegree}, ${colors.pink} 0%, ${colors.purple} 100%)`,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent'
	},
	gradientCyanGreen: {
		background: `linear-gradient(${gradientDegree}, ${colors.cyan} 0%, ${colors.green} 100%)`,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent'
	},
	gradientPurpleGreen: {
		background: `linear-gradient(${gradientDegree}, ${colors.purple} 0%, ${colors.green} 100%)`,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent'
	}
}))
