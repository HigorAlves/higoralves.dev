import type { MantineThemeOverride } from '@mantine/core'

export const theme: MantineThemeOverride = {
	colorScheme: 'dark',
	primaryColor: 'indigo',
	globalStyles: () => ({
		a: {
			textDecoration: 'none'
		}
	})
}
