import React from 'react'

import { MantineProvider } from '@mantine/core'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { KBar } from '../components'

export default function App(props: AppProps) {
	const { Component, pageProps } = props

	return (
		<>
			<Head>
				<title>Higor Alves</title>

				<meta charSet='utf-8' />
				<meta content='Higor Alves' name='author' />
				<meta property='og:type' content='website' />
				<meta content='summary_large_image' name='twitter:card' />
				<meta name='theme-color' content='#08070b' />
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					colorScheme: 'dark'
				}}
			>
				<KBar>
					<Component {...pageProps} />
				</KBar>
			</MantineProvider>
		</>
	)
}
