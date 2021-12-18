import React from 'react'

import Link from 'next/link'

import useStyles from './styles.link'

interface Props {
	children: React.ReactNode
	href: string
}

export function LinkWrapper({ children, href }: Props) {
	const { classes } = useStyles()

	return (
		<Link href={href} passHref>
			<a className={classes.link}>{children}</a>
		</Link>
	)
}
