import React from 'react'

import { Title as Component, TitleProps } from '@mantine/core'

import { useClasses } from './title.styles'

interface Component {
	children: string
	gradient?:
		| 'yellowToPink'
		| 'purpleToCyan'
		| 'pinkToPurple'
		| 'cyanToGreen'
		| 'purpleToGreen'
	white?: boolean
	weight?: 'thin'
}

type Props = Component & TitleProps

export function Title({
	children,
	gradient,
	white,
	weight,
	...rest
}: Props): JSX.Element {
	const { classes, cx } = useClasses()

	return (
		<Component
			className={cx({
				[classes.base]: white,
				[classes.light]: weight === 'thin',
				[classes.gradientYellowToPink]: gradient === 'yellowToPink',
				[classes.gradientPinkPurple]: gradient === 'pinkToPurple',
				[classes.gradientCyanGreen]: gradient === 'cyanToGreen',
				[classes.gradientPurpleCyan]: gradient === 'purpleToCyan',
				[classes.gradientPurpleGreen]: gradient === 'purpleToGreen'
			})}
			{...rest}
		>
			{children}
		</Component>
	)
}
