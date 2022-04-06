import React from 'react'

import { Container } from '@mantine/core'
import Link from 'next/link'
import { FaGithubAlt, FaInstagram, FaLinkedin } from 'react-icons/fa'

import useStyles from './footer.styles'

export function Footer() {
	const { classes } = useStyles()

	const socials = [
		{
			name: 'Github',
			link: 'https://github.com/higoralves',
			icon: <FaGithubAlt />
		},
		{
			name: 'Linkedin',
			link: 'https://www.linkedin.com/in/higoralvesdev/',
			icon: <FaLinkedin />
		},
		{
			name: 'Instagram',
			link: 'https://www.instagram.com/higoralves.dev/',
			icon: <FaInstagram />
		}
	]

	return (
		<footer data-testid={'footer'}>
			<Container fluid className={classes.wrapper}>
				<ul>
					{socials.map(social => (
						<li key={social.name}>
							<Link href={social.link} passHref>
								<a target='_blank' rel='noopener noreferrer'>
									{social.icon}
								</a>
							</Link>
						</li>
					))}
				</ul>
				<text>Made with ❤️ by me</text>
			</Container>
		</footer>
	)
}
