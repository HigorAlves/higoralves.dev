import styled from '@emotion/styled'
import { createStyles } from '@mantine/core'
import { KBarAnimator, KBarSearch } from 'kbar'

export default createStyles(theme => {
	const isDarkTheme = theme.colorScheme === 'dark'

	return {
		positioner: {
			position: 'fixed',
			display: 'flex',
			alignItems: 'flex-start',
			justifyContent: 'center',
			width: '100%',
			inset: 0,
			padding: '14vh 0 15px',
			background: isDarkTheme ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.9)'
		}
	}
})

export const Animator = styled(KBarAnimator)`
	max-width: 600px;
	width: 100%;
	color: var(--primaryColor);
	border-radius: 8px;
	overflow: hidden;
`

export const Search = styled(KBarSearch)`
	padding: 12px 16px;
	font-size: 16px;
	width: 100%;
	box-sizing: border-box;
	outline: none;
	border: none;
	margin: 0;
	background: var(--commandColor);
	color: var(--primaryColor);
`

export const GroupName = styled.div`
	padding: 8px 16px;
	font-size: 10px;
	text-transform: uppercase;
	letter-spacing: 1px;
	background: var(--commandColor);
`

export const ActionRow = styled.div`
	display: flex;
	flex-direction: column;
`

export const Kbd = styled.kbd`
	padding: 4px 8px;
	text-transform: uppercase;
	color: var(--secondaryColor);
	background: rgba(255, 255, 255, 0.1);
`

interface ResultProps {
	active: boolean
}

export const Result = styled.div<ResultProps>`
	padding: 12px 16px;
	display: flex;
	background: ${({ active }) =>
		active ? 'rgba(255, 255, 255, 0.1)' : 'var(--commandColor)'};
	border-left: ${({ active }) =>
		`2px solid ${active ? 'var(--primaryColor)' : 'transparent'}`};
	align-items: center;
	justify-content: space-between;
	margin: 0;
	cursor: pointer;
	color: ${({ active }) =>
		active ? 'var(--primaryColor)' : 'var(--secondaryColor)'};
`

export const Shortcut = styled.div`
	display: grid;
	grid-auto-flow: column;
	gap: 4px;
`

export const Action = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
`
