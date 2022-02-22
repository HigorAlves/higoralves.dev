import React, { ReactNode } from 'react'

import { SchemaProps } from '~/components'

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
	jsonLd: SchemaProps
}

export function Layout({ children, type, meta, jsonLd }: Props) {
	function layoutChoice(type: LayoutTypes) {
		const layoutList = {
			base: (
				<BaseLayout meta={meta} jsonLd={jsonLd}>
					{children}
				</BaseLayout>
			),
			slider: <SliderLayout>{children}</SliderLayout>
		}

		return (
			layoutList[type] || (
				<BaseLayout meta={meta} jsonLd={jsonLd}>
					{children}
				</BaseLayout>
			)
		)
	}

	return layoutChoice(type)
}
