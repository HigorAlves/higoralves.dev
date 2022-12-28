import React, { ReactElement } from 'react'

import { BaseLayout } from '~/layout/base.layout'

export type LayoutTypes = 'base' | 'dashboard'

interface LayoutProps {
	layout: LayoutTypes
	children: ReactElement
}

export function Layout({ layout, children }: LayoutProps) {
	function getLayout(type: LayoutTypes) {
		const list = {
			base: <BaseLayout>{children}</BaseLayout>,
			dashboard: <BaseLayout>{children}</BaseLayout>
		}

		return list[layout] || <BaseLayout>{children}</BaseLayout>
	}

	return getLayout(layout)
}
