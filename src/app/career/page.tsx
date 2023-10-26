'use client'
import { Box, Container, Grid, Paper, Stack, Text, Title } from '@mantine/core'
import { LordIcon } from '~/components'

export default function CareerPage() {
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
          Career. Innovation. Impact.
        </Text>
        <Text c={'dimmed'}>
          Explore my professional journey and discover how innovation and coding have enabled me to make a positive
          impact in the world of software.
        </Text>
      </Box>

      <Grid>
        <Grid.Col span={{ sm: 12, md: 3 }}>
          <Paper radius="sm" p={'xl'} withBorder>
            <Stack align={'start'} mb={'md'} gap={0}>
              <LordIcon icon={'/icons/animated/wired-outline-743-web-code.json'} />
              <Text fw={'bold'} size={'xl'}>
                ArchTouch
              </Text>
              <Text fw={'lighter'} size={'sm'}>
                Senior Software Engineer
              </Text>
            </Stack>

            <Text size={'sm'} lineClamp={5}>
              We help companies forge meaningful connections with their customers and employees through lovable apps,
              websites, and digital products. Since the dawn of the app revolution, we've helped businesses of all
              sizes, from the Fortune 500 to innovative startups.
            </Text>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
