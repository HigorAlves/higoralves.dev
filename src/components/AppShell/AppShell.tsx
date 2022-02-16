import React from 'react'

import { AppShell as Shell, Container, Header } from '@mantine/core'

import { HeaderButtons, HeaderTitle, HeaderOptions } from './index'
import useStyles from './styles.appbar'

type Props = {
	children: React.ReactNode
}

export function AppShell({ children }: Props) {
	const { classes } = useStyles()

	return (
		<Shell
			padding='md'
			header={
				<Header height={80} padding='xs'>
					<Container size={'xl'} className={classes.container}>
						<HeaderTitle />
						<HeaderOptions />
						<HeaderButtons />
					</Container>
				</Header>
			}
		>
			{children}
		</Shell>
	)
}
