import React from 'react'

import Link from 'next/link'

import useStyles from './styles.link'

interface Props {
	children: React.ReactNode
	href: string
	target?: '_blank' | '_self'
}

export function LinkWrapper({ children, href, target = '_self' }: Props) {
	const { classes } = useStyles()

	return (
		<Link href={href} passHref>
			<a className={classes.link} target={target}>
				{children}
			</a>
		</Link>
	)
}
