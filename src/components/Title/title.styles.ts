import { createStyles } from '@mantine/core'

const gradientDegree = '135deg'

export const useClasses = createStyles(theme => ({
	base: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[9]
	},
	thin: {
		fontWeight: 100
	},
	light: {
		fontWeight: 300
	},
	regular: {
		fontWeight: 400
	},
	bold: {
		fontWeight: 700
	},
	gradientOrangeToPink: {
		background: `linear-gradient(${gradientDegree}, ${theme.colors.orange} 0%, ${theme.colors.pink[5]} 100%)`,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent'
	},
	gradientYellowToPink: {
		background: `linear-gradient(${gradientDegree}, ${theme.colors.yellow} 0%, ${theme.colors.pink[5]} 100%)`,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent'
	},
	gradientGrapeToPink: {
		background: `linear-gradient(${gradientDegree}, ${theme.colors.grape} 0%, ${theme.colors.pink[5]} 100%)`,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent'
	},
	gradientPurpleCyan: {
		background: `linear-gradient(${gradientDegree}, ${theme.colors.purple} 0%, ${theme.colors.cyan[5]} 100%)`,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent'
	},
	gradientPinkPurple: {
		background: `linear-gradient(${gradientDegree}, ${theme.colors.pink} 0%, ${theme.colors.purple} 100%)`,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent'
	},
	gradientCyanGreen: {
		background: `linear-gradient(${gradientDegree}, ${theme.colors.cyan} 0%, ${theme.colors.green[5]} 100%)`,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent'
	},
	gradientPurpleGreen: {
		background: `linear-gradient(${gradientDegree}, ${theme.colors.indigo} 0%, ${theme.colors.green[5]} 100%)`,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent'
	}
}))
