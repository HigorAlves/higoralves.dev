import React from 'react'

import { ActionIcon, Box, Tooltip, useMantineColorScheme } from '@mantine/core'
import { CgMoon, CgSun } from 'react-icons/cg'

import { LOCAL_STORAGE } from '~/config/constants'

type WrapperProps = {
	label: string
	children: React.ReactNode
	onClick?: () => void
}

function TooltipButton({ label, children, onClick }: WrapperProps) {
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
			<ActionIcon onClick={onClick} title={label}>
				<Box
					sx={theme => ({
						backgroundColor:
							theme.colorScheme === 'dark'
								? theme.colors.dark[4]
								: theme.colors.gray[0],
						textAlign: 'center',
						padding: theme.spacing.xs,
						borderRadius: theme.radius.md,
						cursor: 'pointer',

						'&:hover': {
							backgroundColor:
								theme.colorScheme === 'dark'
									? theme.colors.dark[5]
									: theme.colors.gray[1]
						}
					})}
				>
					{children}
				</Box>
			</ActionIcon>
		</Tooltip>
	)
}

export function HeaderButtons() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme()
	const isDarkTheme = colorScheme === 'dark'

	async function toggleColor() {
		toggleColorScheme()
		localStorage.setItem(
			LOCAL_STORAGE.COLOR_SCHEMA,
			isDarkTheme ? 'light' : 'dark'
		)
	}

	return (
		<section style={{ display: 'flex' }}>
			<TooltipButton
				label={isDarkTheme ? 'Light' : 'Dark'}
				onClick={toggleColor}
			>
				{isDarkTheme ? <CgSun size={20} /> : <CgMoon size={20} />}
			</TooltipButton>
		</section>
	)
}
