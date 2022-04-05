import React, { ReactNode } from 'react'

import { Container, createStyles } from '@mantine/core'

import { AppShell, Footer, JsonLD, SchemaProps, SEOHead } from '~/components'
import { Meta } from '~/layouts/index'

interface Props {
	children: ReactNode
	meta: Meta
	jsonLd: SchemaProps
}

const useClass = createStyles(() => ({
	wrapper: {
		height: 'calc(100vh - 165px)'
	}
}))

function BaseLayout({ children, meta, jsonLd }: Props): JSX.Element {
	const { classes } = useClass()

	return (
		<>
			<SEOHead meta={meta} />
			<JsonLD {...jsonLd} />
			<AppShell>
				<Container size={'lg'} className={classes.wrapper}>
					{children}
				</Container>
			</AppShell>
			<Footer />
		</>
	)
}

export default BaseLayout
