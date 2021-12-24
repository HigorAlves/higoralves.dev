import React, { ReactNode } from 'react'

import BaseLayout from './base.layout'
import SliderLayout from './slider.layout'

export type LayoutTypes = 'base' | 'slider'

interface Props {
	children: ReactNode
	type: LayoutTypes
}

export function Layout({ children, type }: Props) {
	function layoutChoice(type: LayoutTypes) {
		const layoutList = {
			base: <BaseLayout>{children}</BaseLayout>,
			slider: <SliderLayout>{children}</SliderLayout>
		}

		return layoutList[type] || <BaseLayout>{children}</BaseLayout>
	}

	return layoutChoice(type)
}
