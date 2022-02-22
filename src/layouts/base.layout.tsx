import React, { ReactNode } from 'react'

import { Container } from '@mantine/core'

import { AppShell, Footer, JsonLD, SchemaProps, SEOHead } from '~/components'
import { Meta } from '~/layouts/index'

interface Props {
	children: ReactNode
	meta: Meta
	jsonLd: SchemaProps
}

function BaseLayout({ children, meta, jsonLd }: Props): JSX.Element {
	return (
		<>
			<SEOHead meta={meta} />
			<JsonLD {...jsonLd} />
			<AppShell>
				<Container size={'lg'}>{children}</Container>
			</AppShell>
			<Footer />
		</>
	)
}

export default BaseLayout
