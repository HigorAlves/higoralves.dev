import React, { ReactNode } from 'react'

import { Container } from '@mantine/core'

import { AppShell } from '~/components'

interface Props {
	children: ReactNode
}

function BaseLayout({ children }: Props): JSX.Element {
	return (
		<AppShell>
			<Container size={'lg'}>{children}</Container>
		</AppShell>
	)
}

export default BaseLayout
