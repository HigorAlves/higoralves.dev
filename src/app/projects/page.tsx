'use client'
import { Box, Container, Grid, Text, Title } from '@mantine/core'
import { ProjectCard } from '~/components'
import { PROJECTS } from '~/mocks/projects'

export default function ProjectsPage() {
  const FEATURE_PROJECTS = PROJECTS.filter((project) => project.isFeature)
  const NORMAL_PROJECTS = PROJECTS.filter((project) => !project.isFeature)

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
          {FEATURE_PROJECTS.map((project) => (
            <Grid.Col key={project.slug} span={{ md: 3 }}>
              <ProjectCard {...project} />
            </Grid.Col>
          ))}
        </Grid>
      </Box>

      <Box>
        <Title order={3}>All Projects</Title>
        <Text c={'dimmed'} mb={'lg'} fw={'thin'} size={'sm'}>
          Some projects are under NDA so they cannot be listed.
        </Text>
        <Grid>
          <Grid>
            {NORMAL_PROJECTS.map((project) => (
              <Grid.Col key={project.slug} span={{ md: 3 }}>
                <ProjectCard {...project} />
              </Grid.Col>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
