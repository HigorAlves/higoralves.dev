import { Blockquote } from '@mantine/core'

import { Title } from '~/components'

export function Bio() {
	return (
		<>
			<Title
				title={'Bio'}
				order={2}
				subtitle={
					'This is made for journalists, podcast hosts, and event organizers to copy-and-paste.'
				}
				size={'sm'}
			/>

			<Blockquote>
				Higor Alves have a diverse background in software development and have
				worked on a variety of projects. His experience includes leading
				technical debt reduction efforts, creating design systems, developing
				APIs and cross-platform applications, and implementing automated tests
				and regression versions. He also worked on front-end development, user
				experience design, and improving performance and fixing bugs.
				Additionally, He have experience in migrating legacy codebases to more
				efficient microservices structures, which can improve system performance
				and maintainability.
			</Blockquote>
		</>
	)
}
