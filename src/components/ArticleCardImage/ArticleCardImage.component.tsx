import { Paper, Text, Title, Button } from '@mantine/core'
import Link from 'next/link'

import { useStyles } from '~/components/ArticleCardImage/ArticleCardImage.styles'

interface ArticleCardImageProps {
	image: string
	title: string
	category: string
	slug: string
}

export function ArticleCardImage({
	image,
	title,
	category,
	slug
}: ArticleCardImageProps) {
	const { classes } = useStyles()

	return (
		<Paper
			shadow='md'
			p='xl'
			radius='md'
			sx={{ backgroundImage: `url(${image})` }}
			className={classes.card}
		>
			<div>
				<Text className={classes.category} size='xs'>
					{category}
				</Text>
				<Title order={3} className={classes.title}>
					{title}
				</Title>
			</div>
			<Link href={slug}>
				<Button variant='white' color='dark'>
					Read article
				</Button>
			</Link>
		</Paper>
	)
}
