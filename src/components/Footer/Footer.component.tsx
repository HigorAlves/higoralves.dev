import { Anchor, Group } from '@mantine/core'
import Link from 'next/link'

import { Logo, SocialMediaLinks } from '~/components/Icons'

import { useStyles } from './Footer.styles'

interface FooterCenteredProps {
	links: { link: string; label: string }[]
}

export function Footer({ links }: FooterCenteredProps) {
	const { classes } = useStyles()
	const items = links.map(link => (
		<Anchor<'a'>
			color='dimmed'
			key={link.label}
			href={link.link}
			sx={{ lineHeight: 1 }}
			onClick={event => event.preventDefault()}
			size='sm'
		>
			{link.label}
		</Anchor>
	))

	return (
		<div className={classes.footer}>
			<div className={classes.inner}>
				<Link href={'/'}>
					<Logo color={'#fff'} variant={'iconWithName'} />
				</Link>

				<Group className={classes.links}>{items}</Group>

				<SocialMediaLinks spacing='xs' position='right' noWrap />
			</div>
		</div>
	)
}
