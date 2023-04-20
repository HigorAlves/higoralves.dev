import { memo } from 'react'

import { Paper, Tooltip } from '@mantine/core'
import Image from 'next/image'

import { SkillIcons } from '../Icons/SkillIcons'

type KeyOf<T> = keyof T
type Props = {
	icon: KeyOf<typeof SkillIcons>
	name: string
}

function SkillIconComponent({ icon, name }: Props) {
	return (
		<Paper
			p={'xl'}
			radius={10}
			w={120}
			h={100}
			style={{ display: 'flex', alignItems: 'center' }}
		>
			<Tooltip label={name} offset={-10} withArrow>
				<Image src={icon} alt={'Skill Icon'} width={50} height={90} />
			</Tooltip>
		</Paper>
	)
}

export const SkillIcon = memo(SkillIconComponent)
