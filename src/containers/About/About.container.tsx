'use client'
import { ActionIcon, Button, Container, Flex, Grid, Group, Space, Text, Title } from '@mantine/core'
import { IconArrowRight, IconCheck } from '@tabler/icons-react'

const CATEGORIES = [
  {
    title: 'Code Unleashed',
    description: 'Creating robust software solutions, with my laptop and a diverse view as companions.',
  },
  {
    title: 'Geo-Free Living',
    description: 'Exploring the planet, each journey enriching my life and invigorating my work.',
  },
  {
    title: 'Adventure Unlimited',
    description: 'Embracing freedom, illustrating a life unbound by geographic constraints.',
  },
]

export function About() {
  return (
    <Container size={'lg'}>
      <Grid gutter={'xl'}>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Title order={1} c={'white'} style={{ fontSize: '3rem' }}>
            Work. Hobby. Freedom
          </Title>

          <Space h={'xl'} />

          <Flex gap={'xl'} direction={'column'}>
            {CATEGORIES.map((item) => (
              <Group key={item.title}>
                <Group align={'center'} justify={'center'}>
                  <ActionIcon variant="filled" size="sm" radius="sm" aria-label="What I achivied">
                    <IconCheck stroke={1.5} />
                  </ActionIcon>
                  <Text size={'sm'} c={'white'}>
                    {item.title}
                  </Text>
                </Group>
                <Text c={'dimmed'}>{item.description}</Text>
              </Group>
            ))}
          </Flex>

          <Space h={'xl'} />
          <Button variant={'light'} rightSection={<IconArrowRight size={14} />}>
            What I&apos;m Doing
          </Button>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }} offset={2}>
          <Text size={'md'} c={'dimmed'}>
            Discover the life of a nomadic software developer, where coding and exploration collide. Here, we reimagine
            the boundaries of work, hobby, and freedom.
          </Text>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
