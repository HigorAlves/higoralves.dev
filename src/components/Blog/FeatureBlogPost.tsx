import React from 'react'

import {
	Card,
	Group,
	Text,
	Badge,
	Space,
	Grid,
	Col,
	Button
} from '@mantine/core'
import Image from 'next/image'

import { Title } from '~/components'

export function FeatureBlogPost() {
	return (
		<section id={'blog-feature-section'}>
			<Card shadow={'sm'} padding={60}>
				<Badge
					color='grape'
					variant='outline'
					size={'lg'}
					style={{ position: 'absolute' }}
				>
					Feature article
				</Badge>
				<Grid align={'center'}>
					<Col span={8}>
						<Group
							position='apart'
							style={{
								marginBottom: 5
							}}
							spacing={'xl'}
						>
							<Title order={2} white>
								How I build a modern website in 2021
							</Title>
							<Text>
								With Fjord Tours you can explore more of the magical fjord
								landscapes with tours and activities on and around the fjords of
								Norway
							</Text>
							<Text weight={700}>September 29th, 2021 - 10 min read</Text>
						</Group>
						<Space h={60} />
						<Button
							variant={'gradient'}
							gradient={{ from: 'grape', to: 'pink' }}
						>
							Read full article
						</Button>
					</Col>
					<Col span={4}>
						<Card.Section
							style={{
								position: 'relative',
								borderRadius: '6px',
								overflow: 'hidden'
							}}
						>
							<Image
								src={
									'https://res.cloudinary.com/kentcdodds-com/image/upload/w_2100,q_auto,f_auto,b_rgb:e6e9ee/kentcdodds.com/content/blog/how-i-built-a-modern-website-in-2021/banner_iplhop'
								}
								alt={'cover image example'}
								width={410}
								height={513}
								layout={'responsive'}
								objectFit={'cover'}
								objectPosition={'center'}
							/>
						</Card.Section>
					</Col>
				</Grid>
			</Card>
		</section>
	)
}
