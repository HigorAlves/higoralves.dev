import React from 'react'

import { Container } from '@mantine/core'
import Link from 'next/link'

import useStyles from './footer.styles'

export function Footer() {
	const { classes } = useStyles()

	const socials = [
		{
			name: 'Github',
			link: 'https://github.com/higoralves'
		},
		{
			name: 'Linkedin',
			link: 'https://github.com/higoralves'
		},
		{
			name: 'Instagram',
			link: 'https://github.com/higoralves'
		}
	]

	return (
		<footer data-testid={'footer'}>
			<Container className={classes.wrapper}>
				<ul>
					{socials.map(social => (
						<Link key={social.name} href={social.link} passHref>
							<li>
								<a target='_blank' rel='noreferrer'>
									{social.name}
								</a>
							</li>
						</Link>
					))}
				</ul>
			</Container>
		</footer>
	)
}
