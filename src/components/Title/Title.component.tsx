import {
	MantineGradient,
	MantineNumberSize,
	Text,
	Title as BaseTitle,
	TitleOrder
} from '@mantine/core'

interface Props {
	title: string
	subtitle?: string
	gradient?: MantineGradient
	order: TitleOrder
	size?: MantineNumberSize
}

export function Title({
	title,
	subtitle,
	order,
	gradient,
	size
}: Props): JSX.Element {
	return (
		<>
			<BaseTitle
				order={order}
				variant={gradient ? 'gradient' : 'text'}
				gradient={gradient}
				ta='left'
			>
				{title}
			</BaseTitle>
			<Text ta={'left'} size={size ?? 'lg'} color='dimmed' weight={300}>
				{subtitle}
			</Text>
		</>
	)
}
