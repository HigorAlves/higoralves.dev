import React, { useState } from 'react'

import { AppShell as Shell, Burger, Container, Header } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { Drawer } from '~/components/AppShell/Navbar/Drawer'

import { HeaderButtons, HeaderOptions, HeaderTitle } from './index'
import useStyles from './styles.appbar'

type Props = {
	children: React.ReactNode
}

export function AppShell({ children }: Props) {
	const { classes } = useStyles({ isDrawerStyle: false })
	const [opened, setOpened] = useState(false)
	const tablet = useMediaQuery('(min-width: 768px)')
	const laptop = useMediaQuery('(min-width: 1024px)')

	return (
		<Shell
			padding='md'
			header={
				<Header height={80}>
					<Drawer opened={opened} setOpened={setOpened} />
					<Container size={'xl'} className={classes.container}>
						<HeaderTitle />
						{laptop && <HeaderOptions isDrawer={false} />}
						{tablet && <HeaderButtons />}
						{!tablet && (
							<Burger opened={opened} onClick={() => setOpened(!opened)} />
						)}
					</Container>
				</Header>
			}
		>
			{children}
		</Shell>
	)
}
