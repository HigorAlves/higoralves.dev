import React, { forwardRef } from 'react'

import { Kbd, useMantineColorScheme } from '@mantine/core'
import { useHotkeys } from '@mantine/hooks'
import {
	KBarAnimator,
	KBarPortal,
	KBarPositioner,
	KBarProvider,
	KBarResults,
	KBarSearch,
	useMatches
} from 'kbar'
import { useRouter } from 'next/router'

import useStyles from './styles.kbar'

export function KBar(props: any) {
	const { toggleColorScheme } = useMantineColorScheme()
	const router = useRouter()
	const { classes } = useStyles()
	useHotkeys([
		['mod+u', () => navigator.clipboard.writeText(window.location.href)],
		['mod+e', () => window.open('mailto:higorhaalves@gmail.com', '_blank')],
		['mod+c', () => toggleColorScheme()]
	])

	const actions = [
		{
			id: 'copy',
			name: 'Copy URL',
			shortcut: ['u'],
			keywords: 'copy-url',
			section: 'General',
			perform: () => navigator.clipboard.writeText(window.location.href)
		},
		{
			id: 'email',
			name: 'Send Email',
			shortcut: ['e'],
			keywords: 'send-email',
			section: 'General',
			perform: () => window.open('mailto:higorhaalves@gmail.com', '_blank')
		},
		{
			id: 'colorSchema',
			name: 'Change Color',
			shortcut: ['c'],
			keywords: 'color-schema',
			section: 'General',
			perform: () => toggleColorScheme()
		},
		{
			id: 'home',
			name: 'Home',
			shortcut: ['g', 'h'],
			keywords: 'go-home',
			section: 'Go To',
			perform: () => router.push('/')
		},
		{
			id: 'github',
			name: 'Github',
			shortcut: ['f', 'g'],
			keywords: 'go-github',
			section: 'Follow',
			perform: () => window.open('https://github.com/higoralves', '_blank')
		},
		{
			id: 'linkedin',
			name: 'LinkedIn',
			shortcut: ['f', 'l'],
			keywords: 'go-linkedin',
			section: 'Follow',
			perform: () =>
				window.open('https://linkedin.com/in/higoralvesdev', '_blank')
		},
		{
			id: 'instagram',
			name: 'Instagram',
			shortcut: ['f', 'i'],
			keywords: 'go-instagram',
			section: 'Follow',
			perform: () =>
				window.open('https://instagram.com/higoralves.dev/', '_blank')
		}
	]

	return (
		<KBarProvider actions={actions} data-testid={'kbar-provider'}>
			<KBarPortal>
				<KBarPositioner className={classes.positioner}>
					<KBarAnimator className={classes.animator}>
						<KBarSearch
							className={classes.search}
							placeholder='Type a command or search…'
						/>
						<RenderResults />
					</KBarAnimator>
				</KBarPositioner>
			</KBarPortal>

			{props.children}
		</KBarProvider>
	)
}

function RenderResults() {
	const { results } = useMatches()
	const { classes } = useStyles()

	return (
		<KBarResults
			items={results}
			onRender={({ item, active }) =>
				typeof item === 'string' ? (
					<div className={classes.groupName}>{item}</div>
				) : (
					<ResultItem action={item} active={active} />
				)
			}
		/>
	)
}

const ResultItem = forwardRef(({ action, active }: any, ref: any) => {
	const { classes } = useStyles(active)

	return (
		<div ref={ref} className={classes.result}>
			<div>
				{action.icon}
				<div>{action.name}</div>
			</div>
			{action.shortcut?.length ? (
				<Kbd>{action.shortcut.map((shortcut: string) => shortcut)}</Kbd>
			) : null}
		</div>
	)
})

ResultItem.displayName = 'ResultItem'
