import React, { ReactElement } from "react";

interface BaseLayoutProps {
	children: ReactElement;
}

export function BaseLayout({ children }: BaseLayoutProps) {
	return (
		<div>
			HELOW
			{children}
		</div>
	);
}
