'use client'
import {
  Box,
  Container,
  Grid,
  px,
  rem,
  SimpleGrid,
  Skeleton,
  Space,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'

const PRIMARY_COL_HEIGHT = rem(300)
const getChild = (height: number) => <Skeleton height={height} radius="md" animate={false} />
const BASE_HEIGHT = 360
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children)

export default function ProjectsPage() {
  const theme = useMantineTheme()
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`
  return (
    <Container size={'lg'} mt={'xl'}>
      <Box mb={'xl'}>
        <Text
          component={Title}
          order={1}
          fw={900}
          variant="gradient"
          gradient={{ from: 'yellow', to: 'orange', deg: 150 }}
        >
          Explore. Evolve. Learn.
        </Text>
        <Text c={'dimmed'}>
          Embark on a journey of learning and growth with insightful articles and guides. Stay up-to-date with the
          latest updates in the world of development.
        </Text>
      </Box>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
      <Space h={'xl'} />
      <SimpleGrid cols={{ base: 1, xs: 4 }}>
        {getChild(BASE_HEIGHT)}
        <Stack>
          {getChild(getSubHeight(2, px(theme.spacing.md) as number))}
          {getChild(getSubHeight(2, px(theme.spacing.md) as number))}
        </Stack>
        <Stack>
          {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
          {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
          {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
        </Stack>
        {getChild(BASE_HEIGHT)}
      </SimpleGrid>
    </Container>
  )
}
