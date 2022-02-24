import React from 'react'

import Image from 'next/image'

import { UpDownMotion } from '~/components'

export function SideImage() {
	return (
		<UpDownMotion>
			<div style={{ position: 'relative' }}>
				<Image
					src={'/static/images/building.png'}
					layout={'fixed'}
					objectFit={'contain'}
					objectPosition={'center'}
					width={700}
					height={600}
					alt={'Company'}
				/>
			</div>
		</UpDownMotion>
	)
}
