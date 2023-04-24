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
						title={'Como criar testes E2E em Node.JS'}
						category={'Node.JS'}
					/>
				</Grid.Col>
				<Grid.Col span={12} md={6} lg={4}>
					<ArticleCardImage
						image={
							'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
						}
						title={'Lendo 30GB de dados em Node.JS'}
						category={'React'}
					/>
				</Grid.Col>
				<Grid.Col span={12} md={6} lg={4}>
					<ArticleCardImage
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
						image={
							'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
						}
						category={'React'}
						title={'SOME COOLL ASDS'}
						footer={'asdfasdfasd'}
						author={{
							description: 'haha',
							image: 'https://avatars.githubusercontent.com/u/11262976?v=4',
							name: 'Higor Alves'
						}}
					/>
				</Grid.Col>
			</Grid>
		</Container>
	)
}
