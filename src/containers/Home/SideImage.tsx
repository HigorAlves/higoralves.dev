import React from 'react'

import Image from 'next/image'

import { UpDownMotion } from '~/components'

import useClass from './styles.home'

export function SideImage() {
	const { classes } = useClass()

	return (
		<UpDownMotion>
			<div className={classes.image}>
				<Image
					src={'/static/images/rocket.png'}
					layout={'fixed'}
					objectFit={'contain'}
					objectPosition={'center'}
					width={400}
					height={400}
					alt={'Company'}
				/>
			</div>
		</UpDownMotion>
	)
}
