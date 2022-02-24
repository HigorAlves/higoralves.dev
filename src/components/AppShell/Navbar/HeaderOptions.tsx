import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import useStyles from 'src/components/AppShell/styles.appbar'
import { PAGES } from '~/config/constants'

interface Props {
	isDrawer?: boolean
}

export function HeaderOptions({ isDrawer = false }: Props) {
	const { classes } = useStyles({ isDrawerStyle: isDrawer })
	const router = useRouter()

	return (
		<nav className={classes.nav}>
			<ul>
				{PAGES.map(page => {
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
