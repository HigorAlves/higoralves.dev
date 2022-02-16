import React, { ReactNode } from 'react'

import { createStyles } from '@mantine/core'

import { AppShell, Footer } from '~/components'

interface Props {
	children: ReactNode
}

const useStyles = createStyles(() => ({
	wrapper: {
		minHeight: 'calc(100vh - 186.6px)'
	}
}))

function BaseLayout({ children }: Props): JSX.Element {
	const { classes } = useStyles()

	return (
		<>
			<AppShell>
				<main className={classes.wrapper}>{children}</main>
			</AppShell>
			<Footer />
		</>
	)
}

export default BaseLayout
