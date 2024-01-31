'use client'
import { Badge, Card, Group, Skeleton, Stack, Text } from '@mantine/core'
import { ProjectType } from '~/types/project.type'

export function ProjectCard({ isFeature, description, company, title }: ProjectType) {
  return (
    <Card radius="sm" shadow={'sm'}>
      {isFeature && (
        <Card.Section mb={'md'}>
          <Skeleton height={150} animate={false} />
        </Card.Section>
      )}

      <Stack justify="space-between">
        <Stack gap={0}>
          <Group justify={'space-between'} wrap={'nowrap'}>
            <Text fw={500} lineClamp={1}>
              {title}
            </Text>
            <Badge variant={'light'} color={'green'} size={'sm'}>
              {company.name}
            </Badge>
          </Group>
          <Text fz="xs" c="dimmed">
            {company.job}
          </Text>
        </Stack>

        <Text fz={'sm'} lineClamp={4} ta={'left'}>
          {description}
        </Text>
      </Stack>
    </Card>
  )
}
