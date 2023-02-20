import {
	MantineGradient,
	Text,
	Title as BaseTitle,
	TitleOrder
} from '@mantine/core'

interface Props {
	title: string
	subtitle?: string
	gradient: MantineGradient
	order: TitleOrder
}

export function Title({
	title,
	subtitle,
	order,
	gradient
}: Props): JSX.Element {
	return (
		<>
			<BaseTitle order={order} variant='gradient' gradient={gradient} ta='left'>
				{title}
			</BaseTitle>
			<Text ta={'left'} size='lg' color='dimmed' weight={300}>
				{subtitle}
			</Text>
		</>
	)
}
