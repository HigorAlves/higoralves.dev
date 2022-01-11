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

export default function Blog() {
	return (
		<div>
			<section id={'blog-title-section'}>
				<Title
					gradient={'grapeToPink'}
					order={1}
					sx={() => ({
						fontSize: '3rem'
					})}
				>
					Learn development with great articles.
				</Title>
				<Text>
					Find the latest of my writing here, you can learn web development,
					software engineering, and tech career in both English and Portuguese.
				</Text>
			</section>

			<Space h={60} />

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
								style={{ marginBottom: 5 }}
								spacing={'xl'}
							>
								<Title white order={2}>
									How I build a modern website in 2021
								</Title>
								<Text>
									With Fjord Tours you can explore more of the magical fjord
									landscapes with tours and activities on and around the fjords
									of Norway
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
									borderTopRightRadius: '6px',
									borderTopLeftRadius: '6px',
									overflow: 'hidden'
								}}
							>
								<Image
									src={
										'https://res.cloudinary.com/kentcdodds-com/image/upload/w_2100,q_auto,f_auto,b_rgb:e6e9ee/kentcdodds.com/content/blog/how-i-built-a-modern-website-in-2021/banner_iplhop'
									}
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
		</div>
	)
}
