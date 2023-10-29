'use client'
import { Box, Container, Grid, Paper, Rating, Stack, Text, Title } from '@mantine/core'
import { IconBalloon, IconFlag, IconHandRock, IconStar, IconTrack } from '@tabler/icons-react'
import { COMPANIES } from '~/mocks/companies'

export default function CareerPage() {
  const companiesKeys = Object.keys(COMPANIES)

  function renderIcon(icon: string) {
    return (
      <>
        {icon === 'balloon' && <IconBalloon stroke={1} size={30} />}
        {icon === 'handRock' && <IconHandRock stroke={1} size={30} />}
        {icon === 'star' && <IconStar stroke={1} size={30} />}
        {icon === 'flag' && <IconFlag stroke={1} size={30} />}
        {icon === 'track' && <IconTrack stroke={1} size={30} />}
      </>
    )
  }

  return (
    <Container size={'lg'} mt={'xl'}>
      <Box mb={'xl'}>
        <Text
          component={Title}
          order={1}
          fw={900}
          variant="gradient"
          gradient={{ from: 'yellow', to: 'tomato', deg: 150 }}
        >
          Career. Innovation. Impact.
        </Text>
        <Text c={'dimmed'}>
          Explore my professional journey and discover how innovation and coding have enabled me to make a positive
          impact in the world of software.
        </Text>
      </Box>

      <Grid>
        {companiesKeys.map((id: string) => (
          <Grid.Col key={id} span={{ sm: 12, md: 3 }}>
            <Paper radius="sm" p={'xl'} withBorder component={'a'} href={COMPANIES[id].website} target={'_blank'}>
              <Stack align={'start'} mb={'md'} gap={0}>
                {renderIcon(COMPANIES[id].icon)}
                <Text fw={'bold'} size={'xl'} lineClamp={1}>
                  {COMPANIES[id].name}
                </Text>
                <Text fw={'lighter'} size={'sm'}>
                  {COMPANIES[id].job}
                </Text>
                <Rating value={COMPANIES[id].rating} size={'xs'} fractions={2} readOnly />
              </Stack>

              <Text size={'sm'} lineClamp={5}>
                {COMPANIES[id].description}
              </Text>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}
