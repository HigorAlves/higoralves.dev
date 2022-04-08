import React from 'react'

import { Col, Grid } from '@mantine/core'

import { Technology, Title } from '~/components'

interface Props {
	technologies: Array<{
		name?: string | null
		website?: string | null
		icon?: { __typename?: 'Asset'; url: string } | null
	}>
}

export function ProjectTechnologies(props: Props) {
	return (
		<>
			<Title order={3} mb={'xl'}>
				Technologies used
			</Title>

			<Grid gutter={20}>
				{props.technologies.map(tech => (
					<Col span={12} md={1} lg={2} key={tech.name}>
						<Technology
							icon={tech.icon?.url as string}
							name={tech.name as string}
						/>
					</Col>
				))}
			</Grid>
		</>
	)
}
