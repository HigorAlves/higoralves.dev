import { createStyles, Paper, Text, Title, Button, rem } from '@mantine/core'

import { useStyles } from '~/components/ArticleCardImage/ArticleCardImage.styles'

interface ArticleCardImageProps {
	image: string
	title: string
	category: string
}

export function ArticleCardImage({
	image,
	title,
	category
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
			<Button variant='white' color='dark'>
				Read article
			</Button>
		</Paper>
	)
}
