import React from 'react'

import { Col, Grid, Group, Text, ThemeIcon } from '@mantine/core'
import { BsBriefcase } from 'react-icons/bs'
import { FiGlobe } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { RiVipDiamondLine } from 'react-icons/ri'
import { VscOrganization } from 'react-icons/vsc'

import { Link, Title } from '~/components'

interface Props {
	company: string
	industry: string
	role: string
	country: string
	website: string
}

export function ProjectDetails(props: Props) {
	return (
		<>
			<Title order={2} mb={'sm'}>
				Details
			</Title>
			<Grid>
				<Col span={12} md={3} lg={3}>
					<Group>
						<ThemeIcon color='yellow' size={24} radius='xl'>
							<RiVipDiamondLine size={14} />
						</ThemeIcon>
						<Text>{props.company}</Text>
					</Group>
				</Col>
				<Col span={12} md={4} lg={3}>
					<Group>
						<ThemeIcon color='yellow' size={24} radius='xl'>
							<VscOrganization size={14} />
						</ThemeIcon>
						<Text>{props.industry}</Text>
					</Group>
				</Col>
				<Col span={12} md={4} lg={3}>
					<Group>
						<ThemeIcon color='yellow' size={24} radius='xl'>
							<BsBriefcase size={14} />
						</ThemeIcon>
						<Text>{props.role}</Text>
					</Group>
				</Col>
				<Col span={12} md={2} lg={2}>
					<Group>
						<ThemeIcon color='yellow' size={24} radius='xl'>
							<GoLocation size={14} />
						</ThemeIcon>
						<Text>{props.country}</Text>
					</Group>
				</Col>
				<Col span={12} md={2} lg={2}>
					<Group>
						<ThemeIcon color='yellow' size={24} radius='xl'>
							<FiGlobe size={14} />
						</ThemeIcon>
						<Link href={props.website} target={'_blank'}>
							<Text color={'yellow'}>Website</Text>
						</Link>
					</Group>
				</Col>
			</Grid>
		</>
	)
}
