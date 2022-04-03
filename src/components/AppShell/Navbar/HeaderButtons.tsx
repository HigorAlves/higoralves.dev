import React from 'react'

import { ActionIcon, Tooltip, useMantineColorScheme } from '@mantine/core'
import { MoonIcon, SunIcon } from '@primer/octicons-react'

type WrapperProps = {
	label: string
	children: React.ReactNode
	space?: boolean
	onClick?: () => void
}

function ToolTipAction({ label, children, space, onClick }: WrapperProps) {
	return (
		<Tooltip
			label={label}
			position='bottom'
			placement='center'
			gutter={10}
			color='orange'
			transition='skew-up'
			transitionDuration={300}
		>
			<ActionIcon
				onClick={onClick}
				title={label}
				style={{ marginLeft: space ? 30 : 0 }}
			>
				{children}
			</ActionIcon>
		</Tooltip>
	)
}

export function HeaderButtons() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme()
	const dark = colorScheme === 'dark'

	return (
		<section style={{ display: 'flex' }}>
			{/*<ToolTipAction label={'Commands'}>*/}
			{/*	<SearchIcon size={'medium'} />*/}
			{/*</ToolTipAction>*/}

			<ToolTipAction label={'Theme'} space onClick={() => toggleColorScheme()}>
				{dark ? <SunIcon size={'medium'} /> : <MoonIcon size={'medium'} />}
			</ToolTipAction>

			{/*<ToolTipAction label={'Pro'} space>*/}
			{/*	<RocketIcon size={'medium'} />*/}
			{/*</ToolTipAction>*/}

			{/*<ToolTipAction label={'Login'} space>*/}
			{/*	<HubotIcon size={'medium'} />*/}
			{/*</ToolTipAction>*/}
		</section>
	)
}
