import { createStyles } from "@mantine/core";

export const useStyles = createStyles(theme => ({
	baseLayout: {
		display: "grid",
		width: "100vw",
		height: "100vh",
		background: theme.colors.dark[7],
		gridTemplateColumns: "1fr",
		gridTemplateRows: "1fr 4fr 1fr",
		gridTemplateAreas: `
		"header"
		"main"
		"footer"
		`
	},

	header: {
		gridArea: "header"
	},
	main: {
		gridArea: "main",
		justifyItems: "center"
	}
}))
