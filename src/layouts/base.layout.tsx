import React, { ReactNode } from 'react'

import { Footer, Navbar } from '~/components'

interface Props {
	children: ReactNode
}

function BaseLayout({ children }: Props): JSX.Element {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default BaseLayout
