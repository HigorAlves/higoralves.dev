import type {
	NextComponentType,
	NextLayoutComponentType,
	NextPageContext
} from 'next'
import type { AppProps } from 'next/app'

import { LayoutTypes, Meta } from '~/layouts'

declare module 'next' {
	type NextLayoutComponentType<P = {}> = NextComponentType<
		NextPageContext,
		any,
		P
	> & {
		layout?: LayoutTypes
		meta?: Meta
	}
}

declare module 'next/app' {
	type AppLayoutProps<P = {}> = AppProps & {
		Component: NextLayoutComponentType
	}
}
