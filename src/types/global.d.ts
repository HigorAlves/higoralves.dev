export {}

declare global {
	type ColorProps = Record<any, string>
	type IPalette = Record<string, ColorProps>
}
