import React, { ReactElement } from "react";

import { Header } from "~/components";

interface BaseLayoutProps {
	children: ReactElement
}

export function BaseLayout({ children }: BaseLayoutProps) {
	const headerLinks = [
		{ label: 'Projects', link: '/projects' },
		{ label: 'Articles', link: '/articles' },
		{ label: 'Uses', link: '/uses' }
	]

	return (
		<>
			<Header links={headerLinks} />
			<main>{children}</main>
		</>
	)
}
