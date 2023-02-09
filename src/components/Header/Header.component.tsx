import {
	Burger,
	Container,
	Drawer,
	Group,
	Header as BaseHeader,
	Stack
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Logo, SocialMediaLinks } from '~/components/Icons'
import { ILinks } from '~/layout/base/base.layout'

import { useStyles } from './Header.styles'

interface HeaderMiddleProps {
	links: Array<ILinks> | []
}

export function Header({ links }: HeaderMiddleProps) {
	const router = useRouter()
	const [opened, { toggle }] = useDisclosure(false)
	const { classes, cx } = useStyles()

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

				<SocialMediaLinks
					spacing={0}
					className={classes.social}
					position='right'
					noWrap
				/>
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
