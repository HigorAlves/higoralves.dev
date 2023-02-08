import { Anchor, createStyles, Group } from '@mantine/core'
import Link from 'next/link'

import { Logo, SocialMediaLinks } from '~/components/Icons'

const useStyles = createStyles(theme => ({
	footer: {
		gridArea: 'footer',
		marginTop: 120,
		borderTop: `1px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
		}`,
		background: theme.colors.dark[7]
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column'
		}
	},

	links: {
		[theme.fn.smallerThan('sm')]: {
			marginTop: theme.spacing.lg,
			marginBottom: theme.spacing.sm
		}
	}
}))

interface FooterCenteredProps {
	links: { link: string; label: string }[]
}

export function Footer({ links }: FooterCenteredProps) {
	const { classes } = useStyles()
	const ICON_SIZE = { size: 18, stroke: 1.5 }
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
