import { ActionIcon, Burger, Container, Group, Header as BaseHeader } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";

import { useStyles } from "./Header.styles";

interface HeaderMiddleProps {
	links: { link: string; label: string }[];
}

export function Header({ links }: HeaderMiddleProps) {
	const [opened, { toggle }] = useDisclosure(false);
	const router = useRouter();
	const { classes, cx } = useStyles();

	const items = links.map(link => (
		<Link
			key={link.label}
			href={link.link}
			className={cx(classes.link, {
				[classes.linkActive]: router.pathname === link.link
			})}
		>
			{link.label}
		</Link>
	));

	return (
		<BaseHeader height={56} mb={120}>
			<Container className={classes.inner}>
				<Burger
					opened={opened}
					onClick={toggle}
					size="sm"
					className={classes.burger}
				/>
				<Group className={classes.links} spacing={5}>
					{items}
				</Group>

				<div>Logo</div>

				<Group spacing={0} className={classes.social} position="right" noWrap>
					<ActionIcon size="lg">
						<IconBrandLinkedin size={18} stroke={1.5} />
					</ActionIcon>
					<ActionIcon size="lg">
						<IconBrandGithub size={18} stroke={1.5} />
					</ActionIcon>
					<ActionIcon size="lg">
						<IconBrandInstagram size={18} stroke={1.5} />
					</ActionIcon>
				</Group>
			</Container>
		</BaseHeader>
	);
}
