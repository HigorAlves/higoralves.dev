import React, { useState } from 'react'

import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider
} from '@mantine/core'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { KBar } from '~/components'
import { darkTheme, lightTheme } from '~/Theme'

import '../../public/static/css/main.css'

export default function App(props: AppProps) {
	const { Component, pageProps } = props
	const [colorScheme, setColorScheme] = useState<'dark' | 'light'>('dark')
	const toggleColorScheme = (value: ColorScheme) => setColorScheme(value)

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
						<Component {...pageProps} />
					</KBar>
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	)
}
