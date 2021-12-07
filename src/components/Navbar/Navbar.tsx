import React from 'react'

import { ActionIcon, Container, useMantineColorScheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { CodeIcon, MoonIcon, SunIcon } from '@modulz/radix-icons'
import { useKBar } from 'kbar'
import Link from 'next/link'
import { useRouter } from 'next/router'

import useStyles from './styles.navbar'
import { Title } from '~/components'

export function Navbar() {
	const { classes } = useStyles()
	const router = useRouter()
	const { query } = useKBar()
	const matches = useMediaQuery('(min-width: 430px)')
	const { colorScheme, toggleColorScheme } = useMantineColorScheme()

	const pages: string[] = ['About']
	const dark = colorScheme === 'dark'

	function NavOptions() {
		return (
			<nav className={classes.nav}>
				<ul>
					{pages.map(page => {
						const path = `/${page.toLowerCase()}`

						return (
							<li key={page}>
								<Link href={path} passHref>
									<a className={router.pathname === path ? 'active' : ''}>
										{page}
									</a>
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		)
	}

	function ToggleButton() {
		return (
			<div style={{ display: 'flex' }}>
				<ActionIcon
					variant='outline'
					color={dark ? 'yellow' : 'blue'}
					onClick={() => toggleColorScheme()}
					title='Toggle color scheme'
					size={'xl'}
				>
					{dark ? (
						<SunIcon style={{ width: 18, height: 18 }} />
					) : (
						<MoonIcon style={{ width: 18, height: 18 }} />
					)}
				</ActionIcon>
				<ActionIcon
					variant='outline'
					color={dark ? 'white' : 'black'}
					onClick={query.toggle}
					title='Toggle commands'
					style={{ marginLeft: 26 }}
					size={'xl'}
				>
					<CodeIcon style={{ width: 18, height: 18 }} />
				</ActionIcon>
			</div>
		)
	}

	return (
		<header>
			<Container size={'xl'} className={classes.container}>
				<Link href={'/'} passHref>
					<Title order={2} white>
						Higor Alves
					</Title>
				</Link>

				{matches && <NavOptions />}

				<ToggleButton />
			</Container>
		</header>
	)
}
