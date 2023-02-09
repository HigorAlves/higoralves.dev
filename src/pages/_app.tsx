import { useState } from 'react'

import { MantineProvider } from '@mantine/core'
import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Layout, LayoutTypes } from '~/layout'
import { theme } from '~/theme/theme'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: LayoutTypes
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function App(props: AppPropsWithLayout) {
	const [queryClient] = useState(() => new QueryClient())
	const { Component, pageProps } = props
	const { getLayout = 'base' } = Component

	return (
		<>
			<Head>
				<title>Higor Alves</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
				<link rel='shortcut icon' href='/favicon.ico' />
			</Head>

			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps.dehydratedState}>
					<ReactQueryDevtools initialIsOpen={false} />
					<MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
						<Layout layout={getLayout}>
							<Component {...pageProps} />
						</Layout>
					</MantineProvider>
				</Hydrate>
			</QueryClientProvider>
		</>
	)
}
