import { ActionIcon, Avatar, Badge, Card, CopyButton, Group, Image, Stack, Text } from '@mantine/core'
import { IconBookmark, IconBookmarkOff, IconHeart, IconShare } from '@tabler/icons-react'
import Link from 'next/link'

import { useStyles } from '~/components/ArticleCardWithFooter/ArticleCardWithFooter.styles'
import { useBookmark } from '~/hooks'

interface ArticleCardFooterProps {
  image: string
  category: string
  title: string
  description: string
  slug: string
}

export function ArticleCardFooter({ image, category, title, description, slug }: ArticleCardFooterProps) {
  const { classes, theme } = useStyles()
  const { isBookmarked, setBookmark } = useBookmark(slug, 'bookmarked-articles')
  const { isBookmarked: isLoved, setBookmark: setLoved } = useBookmark(slug, 'loved-articles')
  const articleLink = `https://higor.dev${slug}`
  const author = {
    image: 'https://avatars.githubusercontent.com/u/11262976?v=4',
    name: 'Higor Alves',
  }

  return (
    <Card withBorder padding="lg" radius="md" className={classes.card}>
      <Card.Section mb="sm">
        <Link href={slug}>
          <Badge variant={'filled'} color={'orange'} className={classes.badge}>
            {category}
          </Badge>
          <Image src={image} alt={title} height={180} />
        </Link>
      </Card.Section>

      <Link href={slug} style={{ textDecoration: 'none' }}>
        <Stack mt="xs" spacing="xs">
          <Text fw={700} className={classes.title} lineClamp={2}>
            {title}
          </Text>
          <Text fw={400} size={'sm'} c={'dimmed'} lineClamp={5}>
            {description}
          </Text>
        </Stack>
      </Link>

      <Card.Section className={classes.footer}>
        <Group position="apart">
          <Group>
            <Avatar src={author.image} radius="xl" size={'sm'} />
            <Text fw={400} size={'sm'}>
              {author.name}
            </Text>
          </Group>
          <Group spacing={0}>
            <ActionIcon onClick={setLoved}>
              <IconHeart size="1.2rem" color={isLoved ? theme.colors.red[6] : theme.colors.gray[6]} stroke={1.5} />
            </ActionIcon>
            <ActionIcon onClick={setBookmark}>
              {isBookmarked ? (
                <IconBookmarkOff size="1.2rem" color={theme.colors.gray[6]} stroke={1.5} />
              ) : (
                <IconBookmark size="1.2rem" color={theme.colors.yellow[6]} stroke={1.5} />
              )}
            </ActionIcon>
            <CopyButton value={articleLink}>
              {({ copy, copied }) => (
                <ActionIcon onClick={copy}>
                  <IconShare size="1.2rem" color={copied ? theme.colors.blue[6] : theme.colors.blue[8]} stroke={1.5} />
                </ActionIcon>
              )}
            </CopyButton>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  )
}
