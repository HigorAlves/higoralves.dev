'use client'
import { Badge, Card, Group, Skeleton, Stack, Text } from '@mantine/core'

export function ProjectCard() {
  return (
    <Card withBorder radius="sm">
      <Card.Section>
        <Skeleton height={150} animate={false} />
      </Card.Section>

      <Stack justify="space-between" mt="md">
        <Stack gap={0}>
          <Group justify={'space-between'}>
            <Text fw={500}>Arctouch</Text>
            <Badge variant={'light'} size={'sm'}>
              Arctouch
            </Badge>
          </Group>
          <Text fz="xs" c="dimmed">
            Senior Software Engineer
          </Text>
        </Stack>

        <Text fz={'sm'} lineClamp={4} ta={'left'}>
          Empowers enterprises to improve the outcomes of their recurring strategic decisions through intelligent
          predictive, data-driven decision model.
        </Text>
      </Stack>
    </Card>
  )
}
