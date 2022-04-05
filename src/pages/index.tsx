import React from 'react'

import { Col, Grid } from '@mantine/core'
import { GetStaticPropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { SchemaProps } from '~/components'
import { SideImage, TitleHome } from '~/containers'
import useClass from '~/containers/Home/styles.home'
import { Meta } from '~/layouts'

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
	props: {
		...(await serverSideTranslations(locale as string, ['home']))
	}
})

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

const meta: Meta = {
	image: {
		title: '',
		url: ''
	},
	title: 'Higor Alves',
	type: 'website',
	description: 'Senior Software Developer',
	twitter: '@higorhaalves',
	url: 'https://higoralves.dev',
	name: 'Higor Alves'
}

const jsonLd: SchemaProps = {
	'@context': 'https://schema.org/',
	'@type': 'Person',
	name: 'Higor Alves',
	url: 'https://www.higoralves.dev',
	image: 'https://avatars.githubusercontent.com/u/11262976?v=4',
	sameAs: [
		'https://github.com/higoralves/',
		'https://www.linkedin.com/in/higoralvesdev/',
		'https://www.instagram.com/higoralves.dev/'
	],
	jobTitle: 'Senior Software Engineer',
	worksFor: {
		'@type': 'Organization',
		name: 'X-Team'
	}
}

Home.meta = meta
Home.jsonLd = jsonLd
