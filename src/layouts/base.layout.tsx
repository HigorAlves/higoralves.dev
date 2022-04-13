import React, { ReactNode } from 'react'

import { Container, createStyles } from '@mantine/core'

import { AppShell, Footer } from '~/components'

interface Props {
	children: ReactNode
}

const useClass = createStyles(() => ({
	wrapper: {
		height: 'calc(100vh - 165px)'
	}
}))

function BaseLayout({ children }: Props): JSX.Element {
	const { classes } = useClass()

	return (
		<>
			<AppShell>
				<Container size={'lg'} className={classes.wrapper}>
					{children}
				</Container>
			</AppShell>
			<Footer />
		</>
	)
}

export default BaseLayout
