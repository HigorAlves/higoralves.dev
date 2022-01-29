import React, { useState } from 'react'

import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider
} from '@mantine/core'
import { AnimatePresence } from 'framer-motion'
// @ts-ignore
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { KBar } from '~/components'
import { FirebaseTrackingProvider } from '~/Context/FirebaseTrackingProvider'
import { Layout, LayoutTypes, Meta } from '~/layouts'
import { darkTheme, lightTheme } from '~/Theme'

import '../../public/static/css/main.css'

type NextPageWithLayout = NextPage & {
	layout?: LayoutTypes
	meta?: Meta
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function App(props: AppPropsWithLayout) {
	const { Component, pageProps } = props
	const router = useRouter()
	const [colorScheme, setColorScheme] = useState<'dark' | 'light'>('dark')
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

	const layoutType = Component.layout ?? 'base'
	const { meta } = Component

	return (
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
					<Layout type={layoutType} meta={meta}>
						<FirebaseTrackingProvider>
							<AnimatePresence exitBeforeEnter>
								<Component key={router.route} {...pageProps} />
							</AnimatePresence>
						</FirebaseTrackingProvider>
					</Layout>
				</KBar>
			</MantineProvider>
		</ColorSchemeProvider>
	)
}
