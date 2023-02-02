import React, { ReactElement } from "react";

import { Footer, Header } from "~/components";

import { useStyles } from "./base.style";

interface BaseLayoutProps {
	children: ReactElement;
}

export function BaseLayout({ children }: BaseLayoutProps) {
	const { classes } = useStyles();

	const links = [
		{ label: "Projects", link: "/projects" },
		{ label: "Articles", link: "/articles" },
		{ label: "Uses", link: "/uses" }
	];

	return (
		<div className={classes.baseLayout}>
			<div className={classes.header}>
				<Header links={links} />
			</div>
			<main className={classes.main}>{children}</main>
			<Footer links={links} />
		</div>
	);
}
