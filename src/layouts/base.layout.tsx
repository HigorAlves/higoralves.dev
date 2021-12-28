import React, { ReactNode } from 'react'

import { Container, createStyles } from '@mantine/core'

import { Footer, Navbar, SEOHead } from '~/components'
import { Meta } from '~/layouts/index'

interface Props {
	children: ReactNode
	meta: Meta
}

const useStyles = createStyles(() => ({
	wrapper: {
		minHeight: 'calc(100vh - 186.6px)'
	}
}))

function BaseLayout({ children, meta }: Props): JSX.Element {
	const { classes } = useStyles()

	return (
		<>
			<SEOHead meta={meta} />
			<Navbar />
			<main className={classes.wrapper}>
				<Container size={'lg'}>{children}</Container>
			</main>
			<Footer />
		</>
	)
}

export default BaseLayout
