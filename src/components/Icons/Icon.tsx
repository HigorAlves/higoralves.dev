import { ActionIcon, ActionIconProps } from '@mantine/core'
import { TablerIconsProps } from '@tabler/icons-react'
import Link from 'next/link'

interface IProps extends ActionIconProps {
	Icon: (props: TablerIconsProps) => JSX.Element
	icon: {
		size: number
		stroke: number
	}
	href: string
}

export function Icon({ size, Icon, icon, href = '/' }: IProps) {
	return (
		<Link href={href} target={'_blank'}>
			<ActionIcon size={size}>
				<Icon size={icon.size} stroke={icon.stroke} />
			</ActionIcon>
		</Link>
	)
}
