import React from 'react'

import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { CodeIcon, MoonIcon, SunIcon } from '@primer/octicons-react'

export function HeaderButtons() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme()
	const dark = colorScheme === 'dark'

	return (
		<div style={{ display: 'flex' }}>
			<ActionIcon
				variant='outline'
				color={dark ? 'yellow' : 'blue'}
				onClick={() => toggleColorScheme()}
				title='Toggle color scheme'
				size={'xl'}
			>
				{dark ? <SunIcon /> : <MoonIcon />}
			</ActionIcon>
			<ActionIcon
				variant='outline'
				color={dark ? 'white' : 'black'}
				// onClick={query.toggle}
				title='Toggle commands'
				style={{ marginLeft: 26 }}
				size={'xl'}
			>
				<CodeIcon />
			</ActionIcon>
		</div>
	)
}
