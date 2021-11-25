import React, { forwardRef } from 'react'

import { useMantineColorScheme } from '@mantine/core'
import {
	KBarPortal,
	KBarPositioner,
	KBarProvider,
	KBarResults,
	useMatches
} from 'kbar'
import { useRouter } from 'next/router'

import * as S from './styles.kbar'

export function KBar(props: any) {
	const { toggleColorScheme } = useMantineColorScheme()
	const router = useRouter()
	const { classes } = S.default()

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
		<KBarProvider actions={actions}>
			<KBarPortal>
				<KBarPositioner className={classes.positioner}>
					<S.Animator className='kbar-blur'>
						<S.Search placeholder='Type a command or search…' />
						<RenderResults />
					</S.Animator>
				</KBarPositioner>
			</KBarPortal>

			{props.children}
		</KBarProvider>
	)
}

function RenderResults() {
	const { results } = useMatches()

	return (
		<KBarResults
			items={results}
			onRender={({ item, active }) =>
				typeof item === 'string' ? (
					<S.GroupName>{item}</S.GroupName>
				) : (
					<ResultItem action={item} active={active} />
				)
			}
		/>
	)
}

const ResultItem = forwardRef(({ action, active }: any, ref: any) => {
	return (
		<S.Result ref={ref} active={active}>
			<S.Action>
				{action.icon}
				<S.ActionRow>
					<span>{action.name}</span>
				</S.ActionRow>
			</S.Action>
			{action.shortcut?.length ? (
				<S.Shortcut>
					{action.shortcut.map((shortcut: string) => (
						<S.Kbd key={shortcut}>{shortcut}</S.Kbd>
					))}
				</S.Shortcut>
			) : null}
		</S.Result>
	)
})

ResultItem.displayName = 'ResultItem'
