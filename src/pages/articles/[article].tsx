import { Container, Group } from '@mantine/core'

import { TableOfContentsFloating } from '~/components'
import { Article } from '~/types/article'

interface IProps {
	article: Article
}

export default function ArticlePage({ article }: IProps) {
	const links = [{ label: 'aasdf', link: 'asdf', order: 1 }]
	return (
		<Container fluid>
			<TableOfContentsFloating links={links} />
		</Container>
	)
}

export async function getStaticPaths() {
	return {
		paths: ['/articles/asdf'],
		fallback: false
	}
}

export async function getStaticProps({
	params
}: {
	params: { project: string }
}) {
	return {
		props: {
			article: {}
		}
	}
}
