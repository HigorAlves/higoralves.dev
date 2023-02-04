import React, { ReactElement } from 'react'

import { Container } from '@mantine/core'

import { Footer, Header } from '~/components'

import { useStyles } from './base.style'

interface BaseLayoutProps {
	children: ReactElement
}

export interface ILinks {
	label: string
	link: string
}

export const LINKS = [{ label: 'Projects', link: '/projects' }]

export function BaseLayout({ children }: BaseLayoutProps) {
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
