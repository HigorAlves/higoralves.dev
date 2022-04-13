import React from 'react'

import { Col, Grid } from '@mantine/core'

import { SideImage, TitleHome } from '~/containers'
import useClass from '~/containers/Home/styles.home'

export default function Home() {
	const { classes } = useClass()

	return (
		<Grid justify='center' align='center' className={classes.wrapper}>
			<Col span={12} md={6}>
				<TitleHome />
			</Col>

			<Col span={12} md={6}>
				<SideImage />
			</Col>
		</Grid>
	)
}
