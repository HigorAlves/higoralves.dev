import { memo } from 'react'

import { Grid } from '@mantine/core'

import { TECH_ICONS } from '~/components/TechCard/Icons'
import { TechIcon } from '~/components/TechCard/TechIcon.component'

type Props = {
	skills: Array<keyof typeof TECH_ICONS>
}
function SkillListComponent({ skills }: Props) {
	return (
		<Grid>
			{skills.map(skill => (
				<Grid.Col md={1} key={skill}>
					<TechIcon key={skill} icon={skill} />
				</Grid.Col>
			))}
		</Grid>
	)
}

export const SkillList = memo(SkillListComponent)
