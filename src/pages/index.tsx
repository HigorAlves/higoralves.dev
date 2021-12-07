import React from 'react'

import { Button, Col, Grid, Space, Text, Title } from '@mantine/core'
import { useKBar } from 'kbar'
import Image from 'next/image'

export default function Home() {
	const { query } = useKBar()
	const imageUrl =
		'https://res.cloudinary.com/kentcdodds-com/image/upload/w_1800,q_auto,f_auto/kentcdodds.com/illustrations/kody-flying_blue'

	return (
		<Grid justify='center' align='center' gutter={40}>
			<Col span={12} md={5}>
				<Title
					order={1}
					sx={theme => ({
						color:
							theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[9]
					})}
				>
					Helping companies make the world a better place through quality
					software.
				</Title>

				<Space h='sm' />

				<Text weight={700}>Senior Software Engineering at X-Team</Text>

				<Space h='sm' />
				<Button
					color={'yellow'}
					onClick={query.toggle}
					variant={'light'}
					size={'xs'}
				>
					Press to start →
				</Button>
			</Col>

			<Col span={12} md={6}>
				<Image
					src={imageUrl}
					alt={'panda-profile'}
					width='100%'
					height='100%'
					layout={'responsive'}
					objectFit='contain'
				/>
			</Col>
		</Grid>
	)
}
