import { createStyles } from '@mantine/core'

export default createStyles((theme, active) => {
	const isDarkTheme = theme.colorScheme === 'dark'
	const isActive = active != null && active
	const hoverDark = isActive ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.0)'
	const hoverLight = isActive ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.0)'
	return {
		positioner: {
			position: 'fixed',
			display: 'flex',
			alignItems: 'flex-start',
			justifyContent: 'center',
			width: '100%',
			inset: 0,
			padding: '14vh 0 15px',
			background: isDarkTheme
				? 'rgba(0, 0, 0, 0.4)'
				: 'rgba(255, 255, 255, 0.4)'
		},
		animator: {
			maxWidth: 600,
			width: '100%',
			borderRadius: 8,
			overflow: 'hidden',
			boxShadow: isDarkTheme
				? '0 4px 30px rgba(255, 255, 255, 0.04)'
				: '0 4px 30px rgba(0, 0, 0, 0.2)',
			backdropFilter: 'blur(7.6px)',
			'-webkit-backdrop-filter': 'blur(7.6px)'
		},
		search: {
			padding: '12px 16px',
			width: '100%',
			outline: 'none',
			border: 'none',
			margin: 0,
			background: isDarkTheme ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0.4)',
			color: 'var(--primaryColor)'
		},
		groupName: {
			padding: '8px 16px',
			fontSize: 10,
			textTransform: 'uppercase',
			letterSpacing: 1,
			background: isDarkTheme
				? 'rgba(255, 255, 255, 0.01)'
				: 'rgba(0, 0, 0, 0.01)'
		},
		result: {
			padding: '12px 16px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			cursor: 'pointer',
			margin: 0,
			background: isDarkTheme ? hoverDark : hoverLight,
			transition: 'all 0.2s ease-out'
		}
	}
})
