import React from 'react'

import {
	Col,
	Container,
	Grid,
	Group,
	Space,
	Text,
	ThemeIcon
} from '@mantine/core'
import {
	BriefcaseIcon,
	LocationIcon,
	OrganizationIcon,
	GlobeIcon,
	RubyIcon
} from '@primer/octicons-react'
// @ts-ignore
import { GetStaticPropsContext } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import { ContentfulImage, Link, SEOHead, Technology, Title } from '~/components'
import ComponentsMap from '~/components/Contentful/componentsMap'
import { Meta } from '~/layouts'
import {
	default as Contentful,
	getProject,
	getProjectsPaths,
	IProject,
	Path
} from '~/services/Contentful'

export async function getStaticPaths() {
	const { projectCollection } = await Contentful.request(getProjectsPaths)

	const slugs = projectCollection.items
	const paths: Path[] = []
	slugs.forEach((item: { slug: string }) => {
		paths.push({ params: { slug: item.slug }, locale: 'en-US' })
		paths.push({ params: { slug: item.slug }, locale: 'pt-BR' })
	})

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const { locale, params } = context
	const slug = params?.slug
	const { projectCollection } = await Contentful.request(getProject, {
		locale,
		slug
	})

	const project: IProject = projectCollection.items[0]
	const mdxSource = await serialize(project.description)

	return {
		props: {
			project: {
				...project,
				source: mdxSource
			}
		},
		revalidate: 60 * 60 * 10
	}
}

type Props = {
	project: IProject
}

export default function Project({ project }: Props) {
	return (
		<>
			<SEOHead meta={project.seo as Meta} />
			<Container>
				<div style={{ borderRadius: '8px', overflow: 'hidden' }}>
					<ContentfulImage
						src={project.cover.url}
						width={1920}
						height={1080}
						layout={'responsive'}
						alt={project.cover.title}
						objectFit={'cover'}
						objectPosition={'center'}
					/>
				</div>
				<Title mt={'xl'} align={'center'} white>
					{project.title as string}
				</Title>

				<MDXRemote {...(project.source as any)} components={ComponentsMap} />

				<section>
					<Space h={30} />
					<Title order={2} mb={'sm'}>
						Details
					</Title>
					<Grid>
						<Col span={12} md={3} lg={3}>
							<Group>
								<ThemeIcon color='yellow' size={24} radius='xl'>
									<RubyIcon size={12} />
								</ThemeIcon>
								<Text>{project.company}</Text>
							</Group>
						</Col>
						<Col span={12} md={4} lg={3}>
							<Group>
								<ThemeIcon color='yellow' size={24} radius='xl'>
									<OrganizationIcon size={12} />
								</ThemeIcon>
								<Text>{project.industry}</Text>
							</Group>
						</Col>
						<Col span={12} md={4} lg={3}>
							<Group>
								<ThemeIcon color='yellow' size={24} radius='xl'>
									<BriefcaseIcon size={12} />
								</ThemeIcon>
								<Text>{project.role}</Text>
							</Group>
						</Col>
						<Col span={12} md={4} lg={3}>
							<Group>
								<ThemeIcon color='yellow' size={24} radius='xl'>
									<LocationIcon size={12} />
								</ThemeIcon>
								<Text>{project.country}</Text>
							</Group>
						</Col>
						<Col span={12} md={4} lg={3}>
							<Group>
								<ThemeIcon color='yellow' size={24} radius='xl'>
									<GlobeIcon size={12} />
								</ThemeIcon>
								<Link href={project.site as string} target={'_blank'}>
									<Text color={'yellow'}>Official Website</Text>
								</Link>
							</Group>
						</Col>
					</Grid>
				</section>

				<Space h={30} />
				<Title order={3} mb={'xl'}>
					Technologies used
				</Title>

				<Grid gutter={20}>
					{project.technologiesCollection?.items.map(tech => (
						<Col span={12} md={1} lg={2} key={tech.name}>
							<Technology icon={tech.icon} name={tech.name} />
						</Col>
					))}
				</Grid>
			</Container>
		</>
	)
}
