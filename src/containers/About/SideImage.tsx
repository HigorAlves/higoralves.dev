import React from 'react'

import Image from 'next/image'

import { UpDownMotion } from '~/components'

export function AboutImage() {
	return (
		<UpDownMotion>
			<div style={{ position: 'relative' }}>
				<Image
					src={'/static/images/boy.png'}
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
