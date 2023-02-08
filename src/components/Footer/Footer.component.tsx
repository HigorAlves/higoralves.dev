import { Anchor, createStyles, Group, Text } from '@mantine/core'
import {
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandYoutube
} from '@tabler/icons'
import Link from 'next/link'

import { Icon, Logo } from '~/components/Icons'

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
					<Group>
						<Logo color={'#fff'} />
						<Text color={'#fff'}>Higor Alves</Text>
					</Group>
				</Link>

				<Group className={classes.links}>{items}</Group>

				<Group spacing='xs' position='right' noWrap>
					<Icon
						Icon={IconBrandLinkedin}
						size={'lg'}
						icon={ICON_SIZE}
						href={'https://www.linkedin.com/in/higoralvesdev/'}
					/>
					<Icon
						Icon={IconBrandGithub}
						size={'lg'}
						icon={ICON_SIZE}
						href={'http://github.com/higoralves/'}
					/>
					<Icon
						Icon={IconBrandInstagram}
						size={'lg'}
						icon={ICON_SIZE}
						href={'https://www.instagram.com/higoralves.dev/'}
					/>
					<Icon
						Icon={IconBrandYoutube}
						size={'lg'}
						icon={ICON_SIZE}
						href={'https://www.youtube.com/channel/UCr72p5NdD2RPimdhi56q0qQ'}
					/>
				</Group>
			</div>
		</div>
	)
}
