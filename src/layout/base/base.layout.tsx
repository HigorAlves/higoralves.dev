import React, { ReactElement } from 'react'

import { AppShell } from '@mantine/core'

import { Footer, Header } from '~/components'

interface BaseLayoutProps {
	children: ReactElement
}

export interface ILinks {
	label: string
	link: string
}

export const LINKS = [
	{ label: 'Projects', link: '/projects' },
	{ label: 'About', link: '/about' },
	{ label: 'Articles', link: '/articles' }
]

export function BaseLayout({ children }: BaseLayoutProps) {
	return (
		<AppShell
			header={<Header links={LINKS} />}
			footer={<Footer links={LINKS} />}
		>
			{children}
		</AppShell>
	)
}
