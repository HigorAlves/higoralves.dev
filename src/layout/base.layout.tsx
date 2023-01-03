import React, { ReactElement } from 'react'

import { Footer, Header } from '~/components'

interface BaseLayoutProps {
	children: ReactElement
}

export function BaseLayout({ children }: BaseLayoutProps) {
	const links = [
		{ label: 'Projects', link: '/projects' },
		{ label: 'Articles', link: '/articles' },
		{ label: 'Uses', link: '/uses' }
	]

	return (
		<>
			<Header links={links} />
			<main>{children}</main>
			<Footer links={links} />
		</>
	)
}
