import React, { useState } from 'react'

import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider
} from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { AnimatePresence } from 'framer-motion'
import { NextPage } from 'next'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { SchemaProps } from '~/components'
import { FirebaseTrackingProvider } from '~/Context/FirebaseTrackingProvider'
import { Layout, LayoutTypes, Meta } from '~/layouts'
import { darkTheme, lightTheme } from '~/Theme'

import '../../public/static/css/main.css'

type NextPageWithLayout = NextPage & {
	layout?: LayoutTypes
	meta: Meta
	jsonLd: SchemaProps
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function App(props: AppPropsWithLayout) {
	const { Component, pageProps } = props
	const router = useRouter()
	const [colorScheme, setColorScheme] = useState<'dark' | 'light'>('dark')
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

	const layoutType = Component.layout ?? 'base'
	const { meta, jsonLd } = Component

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
				<NotificationsProvider>
					<Layout type={layoutType} meta={meta} jsonLd={jsonLd}>
						<FirebaseTrackingProvider>
							<AnimatePresence exitBeforeEnter>
								<Component key={router.route} {...pageProps} />
							</AnimatePresence>
						</FirebaseTrackingProvider>
					</Layout>
				</NotificationsProvider>
			</MantineProvider>
		</ColorSchemeProvider>
	)
}

export default appWithTranslation(App)
