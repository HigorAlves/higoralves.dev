import React, { useState } from 'react'

import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider
} from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { AnimatePresence } from 'framer-motion'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { FirebaseTrackingProvider } from '~/context/FirebaseTrackingProvider'
import { Layout, LayoutTypes } from '~/layouts'
import { darkTheme, lightTheme } from '~/theme'

import '../../public/static/css/main.css'

type NextPageWithLayout = NextPage & {
	layout?: LayoutTypes
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function App(props: AppPropsWithLayout) {
	const { Component, pageProps } = props
	const router = useRouter()
	const [queryClient] = React.useState(() => new QueryClient())
	const [colorScheme, setColorScheme] = useState<'dark' | 'light'>('dark')
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

	const layoutType = Component.layout ?? 'base'

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
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
							<Layout type={layoutType}>
								<FirebaseTrackingProvider>
									<AnimatePresence exitBeforeEnter>
										<Component key={router.route} {...pageProps} />
									</AnimatePresence>
								</FirebaseTrackingProvider>
							</Layout>
						</NotificationsProvider>
					</MantineProvider>
				</ColorSchemeProvider>
			</Hydrate>
			<ReactQueryDevtools />
		</QueryClientProvider>
	)
}

export default App
