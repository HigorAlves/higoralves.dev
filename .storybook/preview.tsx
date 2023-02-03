import { MantineProvider } from '@mantine/core'
import { theme } from '~/theme/theme'

function ThemeWrapper(props: { children: React.ReactNode }) {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
			{props.children}
		</MantineProvider>
	)
}

export const decorators = [
	(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>
]
