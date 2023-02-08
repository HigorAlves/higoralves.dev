import {
	Burger,
	Container,
	Drawer,
	Group,
	Header as BaseHeader,
	Stack
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandYoutube
} from '@tabler/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Icon, Logo } from '~/components/Icons'
import { ILinks } from '~/layout/base/base.layout'

import { useStyles } from './Header.styles'

interface HeaderMiddleProps {
	links: Array<ILinks> | []
}

export function Header({ links }: HeaderMiddleProps) {
	const router = useRouter()
	const [opened, { toggle }] = useDisclosure(false)
	const { classes, cx } = useStyles()
	const ICON_SIZE = { size: 18, stroke: 1.5 }

	const items = links.map((link: ILinks) => (
		<Link
			key={link.label}
			href={link.link}
			className={cx(classes.link, {
				[classes.linkActive]: router.pathname === link.link
			})}
		>
			{link.label}
		</Link>
	))

	return (
		<BaseHeader height={56} mb={120}>
			<Container className={classes.inner}>
				<Burger
					opened={opened}
					onClick={toggle}
					size='sm'
					className={classes.burger}
				/>

				<Group className={classes.links} spacing={5}>
					{items}
				</Group>

				<Link href={'/'}>
					<Logo />
				</Link>
				<Group spacing={0} className={classes.social} position='right' noWrap>
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
			</Container>

			<Drawer
				opened={opened}
				onClose={toggle}
				title='Higor Alves'
				padding='xl'
				size='xl'
			>
				<Stack>{items}</Stack>
			</Drawer>
		</BaseHeader>
	)
}
