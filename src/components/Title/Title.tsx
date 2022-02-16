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
		| 'grapeToPink'
		| 'orangeToPink'
	white?: boolean
	weight?: 'thin' | 'regular' | 'light' | 'bold'
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
				[classes.thin]: weight === 'thin',
				[classes.light]: weight === 'light',
				[classes.regular]: weight === 'regular',
				[classes.bold]: weight === 'bold',
				[classes.gradientOrangeToPink]: gradient === 'orangeToPink',
				[classes.gradientYellowToPink]: gradient === 'yellowToPink',
				[classes.gradientPinkPurple]: gradient === 'pinkToPurple',
				[classes.gradientCyanGreen]: gradient === 'cyanToGreen',
				[classes.gradientPurpleCyan]: gradient === 'purpleToCyan',
				[classes.gradientPurpleGreen]: gradient === 'purpleToGreen',
				[classes.gradientGrapeToPink]: gradient === 'grapeToPink'
			})}
			{...rest}
		>
			{children}
		</Component>
	)
}
