import React, { useState } from 'react'

import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider
} from '@mantine/core'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { KBar } from '~/components'
import { Layout, LayoutTypes } from '~/layouts'
import { darkTheme, lightTheme } from '~/Theme'
import '../../public/static/css/main.css'

type NextPageWithLayout = NextPage & {
	layout?: LayoutTypes
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function App(props: AppPropsWithLayout) {
	const { Component, pageProps } = props
	const [colorScheme, setColorScheme] = useState<'dark' | 'light'>('dark')
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

	const layoutType = Component.layout ?? 'base'

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

			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={colorScheme === 'dark' ? darkTheme : lightTheme}
				>
					<KBar>
						<Layout type={layoutType}>
							<Component {...pageProps} />
						</Layout>
					</KBar>
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	)
}
