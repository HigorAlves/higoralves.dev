import React, { ReactNode } from 'react'

import { Container } from '@mantine/core'
import { NextSeo } from 'next-seo'

import { AppShell } from '~/components'

interface Props {
	children: ReactNode
}

function BaseLayout({ children }: Props): JSX.Element {
	return (
		<AppShell>
			<NextSeo
				title='Higor Alves'
				description='Helping companies make the world a better place through quality software.'
			/>
			<Container size={'lg'}>{children}</Container>
		</AppShell>
	)
}

export default BaseLayout
