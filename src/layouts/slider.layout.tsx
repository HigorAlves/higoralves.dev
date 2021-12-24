import React, { ReactNode } from 'react'

import { createStyles } from '@mantine/core'

import { Footer, Navbar } from '~/components'

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
			<Navbar />
			<main className={classes.wrapper}>{children}</main>
			<Footer />
		</>
	)
}

export default BaseLayout
