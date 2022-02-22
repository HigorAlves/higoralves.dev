import React from 'react'

import Wrapper from 'next/head'

import { Meta } from '~/layouts'

interface Props {
	meta: Meta
}

export function SEOHead({ meta }: Props) {
	return (
		<Wrapper>
			<title>{meta?.title ? meta.title : 'Higor Alves'}</title>

			<meta charSet='utf-8' />
			<meta content='Higor Alves' name='author' />
			<meta name='theme-color' content='#08070b' />
			<meta
				name='viewport'
				content='minimum-scale=1, initial-scale=1, width=device-width'
			/>
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/static/favicon/apple-touch-icon.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/static/favicon/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/static/favicon/favicon-16x16.png'
			/>
			<link rel='manifest' href='/site.webmanifest' />

			<meta
				property='og:site_name'
				content={meta?.name ? meta.name : 'Higor Alves'}
			/>
			<meta
				property='og:title'
				content={meta?.title ? meta.title : 'Higor Alves'}
			/>
			<meta name='description' content={meta?.description} />
			<meta property='og:description' content={meta?.description} />
			<meta property='og:type' content={meta?.type} />
			<meta property='og:url' content={meta?.url} />
			<meta property='og:image' content={meta?.image?.url} />

			<meta name='twitter:card' content='summary' />
			<meta name='twitter:site' content={meta?.twitter} />
			<meta name='twitter:title' content={meta?.title} />
			<meta name='twitter:description' content={meta?.description} />
			<meta name='twitter:image' content={meta?.image?.url} />
		</Wrapper>
	)
}
