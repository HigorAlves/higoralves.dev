import React, { ReactNode } from 'react'

import BaseLayout from './base.layout'
import SliderLayout from './slider.layout'

export type LayoutTypes = 'base' | 'slider'
export type Meta = {
	title: string
	type: 'article' | 'place' | 'website'
	image: {
		url: string
		title: string
	}
	url: string
	name: string
	description: string
	twitter: string
}

interface Props {
	children: ReactNode
	type: LayoutTypes
	meta: Meta
}

export function Layout({ children, type, meta }: Props) {
	function layoutChoice(type: LayoutTypes) {
		const layoutList = {
			base: <BaseLayout meta={meta}>{children}</BaseLayout>,
			slider: <SliderLayout>{children}</SliderLayout>
		}

		return layoutList[type] || <BaseLayout meta={meta}>{children}</BaseLayout>
	}

	return layoutChoice(type)
}
