import { memo } from 'react'

import { Paper } from '@mantine/core'
import Image from 'next/image'

import { SkillIcons } from '../Icons/SkillIcons'

type KeyOf<T> = keyof T
type Props = {
	icon: KeyOf<typeof SkillIcons>
}

function SkillIconComponent({ icon }: Props) {
	return (
		<Paper
			p={'xl'}
			radius={10}
			w={120}
			h={100}
			style={{ display: 'flex', alignItems: 'center' }}
		>
			<Image
				src={SkillIcons[icon].logo}
				alt={'Skill Icon'}
				width={50}
				height={90}
			/>
		</Paper>
	)
}

export const SkillIcon = memo(SkillIconComponent)
