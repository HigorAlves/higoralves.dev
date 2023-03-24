import { memo } from 'react'

import { Paper } from '@mantine/core'
import Image from 'next/image'

import { TECH_ICONS } from './Icons'

type KeyOf<T> = keyof T
type Props = {
	icon: KeyOf<typeof TECH_ICONS>
}

function TechIconComponent({ icon }: Props) {
	return (
		<Paper
			p={'xl'}
			radius={10}
			w={120}
			h={100}
			style={{ display: 'flex', alignItems: 'center' }}
		>
			<Image src={TECH_ICONS[icon]} alt={'Skill Icon'} width={50} height={90} />
		</Paper>
	)
}

export const TechIcon = memo(TechIconComponent)
