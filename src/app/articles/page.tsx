'use client'
import { Box, Container, Grid, rem, SimpleGrid, Skeleton, Space, Text, Title } from '@mantine/core'

const PRIMARY_COL_HEIGHT = rem(300)

export default function ProjectsPage() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`
  return (
    <Container size={'lg'} mt={'xl'}>
      <Box mb={'xl'}>
        <Text
          component={Title}
          order={1}
          fw={900}
          variant="gradient"
          gradient={{ from: 'blue', to: '#1F32C4', deg: 150 }}
        >
          Share. Evolve. Learn.
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
      <Space h={'xs'} />
    </Container>
  )
}
