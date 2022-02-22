import React, { ReactNode } from 'react'

import { Container } from '@mantine/core'

import { AppShell, Footer, SEOHead } from '~/components'
import { Meta } from '~/layouts/index'

interface Props {
	children: ReactNode
	meta: Meta
}

function BaseLayout({ children, meta }: Props): JSX.Element {
	return (
		<>
			<SEOHead meta={meta} />
			<AppShell>
				<Container size={'lg'}>{children}</Container>
			</AppShell>
			<Footer />
		</>
	)
}

export default BaseLayout
