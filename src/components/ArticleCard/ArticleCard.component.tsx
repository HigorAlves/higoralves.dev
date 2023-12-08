import { ActionIcon, Card, Group, Image, Pill, rem, Text, Title, useMantineTheme } from '@mantine/core'
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react'
import classes from './ArticleCardFooter.module.css'

export function ArticleCard() {
  const theme = useMantineTheme()

  return (
    <Card withBorder padding="lg" radius="md" className={classes.card}>
      <Card.Section mb="lg">
        <Image
          src="https://images.unsplash.com/reserve/91JuTaUSKaMh2yjB1C4A_IMG_9284.jpg?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Top 50 underrated plants for house decoration"
          height={400}
        />
      </Card.Section>

      <Text fz="md" c="dimmed">
        December 29th, 2022 — 5 min read
      </Text>
      <Title component={Text} fw={700} order={3} lineClamp={2}>
        My Journey into the Swifty World of iOS Development
      </Title>

      <Card.Section className={classes.footer}>
        <Group justify="space-between">
          <Group>
            <Pill>iOS</Pill>
          </Group>
          <Group gap={0}>
            <ActionIcon variant="subtle" color="gray">
              <IconHeart style={{ width: rem(20), height: rem(20) }} color={theme.colors.red[6]} stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray">
              <IconBookmark style={{ width: rem(20), height: rem(20) }} color={theme.colors.yellow[6]} stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray">
              <IconShare style={{ width: rem(20), height: rem(20) }} color={theme.colors.blue[6]} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  )
}
