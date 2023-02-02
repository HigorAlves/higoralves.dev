import { ActionIcon, Anchor, createStyles, Group, Text } from "@mantine/core";
import {
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandTwitter,
	IconBrandYoutube
} from "@tabler/icons";

import { Logo } from "~/components/Icons";

const useStyles = createStyles(theme => ({
	footer: {
		gridArea: "footer",
		marginTop: 120,
		borderTop: `1px solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
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
				<Group>
					<Logo color={"#fff"} />
					<Text color={"#fff"}>Higor Alves</Text>
				</Group>

				<Group className={classes.links}>{items}</Group>

				<Group spacing="xs" position="right" noWrap>
					<ActionIcon size="lg">
						<IconBrandLinkedin size={18} stroke={1.5} />
					</ActionIcon>
					<ActionIcon size="lg">
						<IconBrandGithub size={18} stroke={1.5} />
					</ActionIcon>
					<ActionIcon size="lg">
						<IconBrandInstagram size={18} stroke={1.5} />
					</ActionIcon>
					<ActionIcon size="lg">
						<IconBrandTwitter size={18} stroke={1.5} />
					</ActionIcon>
					<ActionIcon size="lg">
						<IconBrandYoutube size={18} stroke={1.5} />
					</ActionIcon>
				</Group>
			</div>
		</div>
	)
}
