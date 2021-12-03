import React, { ReactNode } from 'react'

import BaseLayout from './base.layout'

export type LayoutTypes = 'base'

interface Props {
	children: ReactNode
	type: LayoutTypes
}

export function Layout({ children, type }: Props) {
	function layoutChoice(type: LayoutTypes) {
		const layoutList = {
			base: <BaseLayout>{children}</BaseLayout>
		}

		return layoutList[type] || <BaseLayout>{children}</BaseLayout>
	}

	return layoutChoice(type)
}
