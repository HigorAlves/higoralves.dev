'use client'
import { Box, Container, Grid, Text, Title } from '@mantine/core'
import { ProjectCard } from '~/components'

export default function ProjectsPage() {
  return (
    <Container size={'lg'} mt={'xl'}>
      <Box mb={'xl'}>
        <Text
          component={Title}
          order={1}
          fw={900}
          variant="gradient"
          gradient={{ from: 'green', to: 'lime', deg: 150 }}
        >
          Work. Hobby. Open Source
        </Text>
        <Text c={'dimmed'}>
          Here you can navigate to all my different projects, apps, and libraries that I helped in some way.
        </Text>
      </Box>

      <Box mb={'xl'}>
        <Title order={3}>Feature Projects</Title>
        <Text c={'dimmed'} mb={'lg'} fw={'thin'} size={'sm'}>
          I pride myself on my ability to adapt to the unique needs of any project. Whether it’s reducing costs through
          process automation, improving efficiency through the development of productivity tools or even creating new
          digital experiences for your brand.
        </Text>

        <Grid>
          <Grid.Col span={{ md: 3 }}>
            <ProjectCard />
          </Grid.Col>
          <Grid.Col span={{ md: 3 }}>
            <ProjectCard />
          </Grid.Col>
          <Grid.Col span={{ md: 3 }}>
            <ProjectCard />
          </Grid.Col>
          <Grid.Col span={{ md: 3 }}>
            <ProjectCard />
          </Grid.Col>
        </Grid>
      </Box>

      <Box>
        <Title order={3}>All Projects</Title>
        <Text c={'dimmed'} mb={'lg'} fw={'thin'} size={'sm'}>
          Some projects are under NDA so they cannot be listed.
        </Text>
      </Box>
    </Container>
  )
}
