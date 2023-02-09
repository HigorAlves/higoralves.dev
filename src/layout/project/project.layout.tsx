import React, { ReactElement } from 'react'

import { Container } from '@mantine/core'

import { Footer, Header } from '~/components'

import { useStyles } from './project.style'

interface BaseLayoutProps {
	children: ReactElement
}

export const LINKS = [
	{ label: 'Projects', link: '/projects' },
	{ label: 'Articles', link: '/articles' },
	{ label: 'Uses', link: '/uses' }
]

export function ProjectLayout({ children }: BaseLayoutProps) {
	const { classes } = useStyles()

	return (
		<div className={classes.baseLayout}>
			<div className={classes.header}>
				<Header links={LINKS} />
			</div>
			<main className={classes.main}>
				<Container>{children}</Container>
			</main>
			<Footer links={LINKS} />
		</div>
	)
}
