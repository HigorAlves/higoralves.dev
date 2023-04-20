import { memo } from 'react'

import { Grid } from '@mantine/core'

import { SkillIcon } from '~/components/SkillList/SkillIcon.component'
import { Skill } from '~/types/projects'

type Props = {
	skills: Array<Skill>
}
function SkillListComponent({ skills }: Props) {
	return (
		<Grid>
			{skills.map(skill => (
				<Grid.Col md={1} key={skill.id}>
					<SkillIcon key={skill.id} icon={skill.logo} name={skill.name} />
				</Grid.Col>
			))}
		</Grid>
	)
}

export const SkillList = memo(SkillListComponent)
