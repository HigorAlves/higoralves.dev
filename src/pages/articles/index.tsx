import { Container, Grid, rem, Space } from '@mantine/core'

import { ArticleCardFooter, ArticleCardImage, Title } from '~/components'

export default function Articles() {
	return (
		<Container>
			<Title
				title={'Articles'}
				order={1}
				gradient={{ from: 'orange', to: 'red', deg: 170 }}
			/>
			<Space h={'xl'} />

			<Grid>
				<Grid.Col span={12} md={6} lg={4}>
					<ArticleCardImage
						image={
							'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
						}
						slug={'/articles/como-criar-testes-e2e-em-nodejs'}
						title={'Como criar testes E2E em Node.JS'}
						category={'Node.JS'}
					/>
				</Grid.Col>
				<Grid.Col span={12} md={6} lg={4}>
					<ArticleCardImage
						slug={'/articles/como-criar-testes-e2e-em-nodejs'}
						image={
							'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
						}
						title={'Lendo 30GB de dados em Node.JS'}
						category={'React'}
					/>
				</Grid.Col>
				<Grid.Col span={12} md={6} lg={4}>
					<ArticleCardImage
						slug={'/articles/como-criar-testes-e2e-em-nodejs'}
						image={
							'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
						}
						title={'ReactJS Context API'}
						category={'React'}
					/>
				</Grid.Col>
			</Grid>

			<Space h={rem(50)} />

			<Grid>
				<Grid.Col span={12} md={6} lg={4}>
					<ArticleCardFooter
						slug={'/articles/como-criar-testes-e2e-em-nodejs'}
						image={
							'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
						}
						description={
							'How to introduce a new developer to your codebaseHow to introduce a new developer to your codebaseHow to introduce a new developer to your codebaseHow to introduce a new developer to your codebase'
						}
						category={'React'}
						title={'How to introduce a new developer to your codebase'}
					/>
				</Grid.Col>
			</Grid>
		</Container>
	)
}
