import React from 'react'

import { Drawer as Wrapper, Space } from '@mantine/core'

import { HeaderButtons, HeaderOptions } from '~/components'

type Props = {
	opened: boolean
	setOpened: React.Dispatch<React.SetStateAction<boolean>>
}

export function Drawer({ opened, setOpened }: Props) {
	return (
		<Wrapper
			opened={opened}
			onClose={() => setOpened(!opened)}
			title='Menu'
			padding='xl'
			size='sm'
		>
			<HeaderOptions isDrawer={true} />
			<Space h={'xl'} />
			<HeaderButtons />
		</Wrapper>
	)
}
