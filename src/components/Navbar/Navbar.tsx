import React from 'react'

import {
	ActionIcon,
	Container,
	Text,
	useMantineColorScheme
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { CodeIcon, MoonIcon, SunIcon } from '@primer/octicons-react'
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

	const pages: string[] = ['About', 'Projects', 'Blog']
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
									<a className={router.pathname.includes(path) ? 'active' : ''}>
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
					{dark ? <SunIcon /> : <MoonIcon />}
				</ActionIcon>
				<ActionIcon
					variant='outline'
					color={dark ? 'white' : 'black'}
					onClick={query.toggle}
					title='Toggle commands'
					style={{ marginLeft: 26 }}
					size={'xl'}
				>
					<CodeIcon />
				</ActionIcon>
			</div>
		)
	}

	return (
		<header>
			<Container size={'xl'} className={classes.container}>
				<Link href={'/'} passHref>
					<div>
						<Title order={2} white>
							Higor Alves
						</Title>
						<Text size={'xs'} align={'right'} color={'gray'}>
							Keep Moving Foward
						</Text>
					</div>
				</Link>

				{matches && <NavOptions />}

				<ToggleButton />
			</Container>
		</header>
	)
}
