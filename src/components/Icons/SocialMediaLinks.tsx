import { Group, GroupProps } from '@mantine/core'
import {
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandYoutube
} from '@tabler/icons'

import { Icon } from '~/components/Icons/Icon'

const ICON_SIZE = { size: 18, stroke: 1.5 }

const SOCIAL_LINKS = [
	{
		Icon: IconBrandLinkedin,
		size: 'lg',
		icon: ICON_SIZE,
		href: 'https://www.linkedin.com/in/higoralvesdev/'
	},
	{
		Icon: IconBrandGithub,
		size: 'lg',
		icon: ICON_SIZE,
		href: 'http://github.com/higoralves/'
	},
	{
		Icon: IconBrandInstagram,
		size: 'lg',
		icon: ICON_SIZE,
		href: 'https://www.instagram.com/higoralves.dev/'
	},
	{
		Icon: IconBrandYoutube,
		size: 'lg',
		icon: ICON_SIZE,
		href: 'https://www.youtube.com/channel/UCr72p5NdD2RPimdhi56q0qQ'
	}
]

export function SocialMediaLinks(props: GroupProps) {
	return (
		<Group {...props}>
			{SOCIAL_LINKS.map(social => (
				<Icon key={social.href} {...social} size={'lg'} />
			))}
		</Group>
	)
}
