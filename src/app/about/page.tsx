'use client'
import { Blockquote, Box, Container, Grid, Skeleton, Text, Title } from '@mantine/core'

export default function About() {
  const quote =
    'Higor Alves have a diverse background in software development and have worked on a variety of projects. His experience includes leading technical debt reduction efforts, creating design systems, developing APIs and cross-platform applications, and implementing automated tests and regression versions. He also worked on front-end development, user experience design, and improving performance and fixing bugs. Additionally, He have experience in migrating legacy codebases to more efficient microservices structures, which can improve system performance and maintainability.'
  return (
    <Container size={'lg'} mt={'xl'}>
      <Box mb={'xl'}>
        <Text
          component={Title}
          order={1}
          fw={900}
          variant="gradient"
          gradient={{ from: 'red', to: 'purple', deg: 150 }}
        >
          Explore. Create. Share.
        </Text>
        <Text c={'dimmed'}>
          I make the world a better place by teaching people like you how to make quality software.
        </Text>
      </Box>

      <Grid justify={'center'} align={'center'}>
        <Grid.Col span={{ lg: 6, md: 6 }}>
          <Skeleton height={300} radius="md" animate={false} />
        </Grid.Col>

        <Grid.Col span={{ lg: 6, md: 6 }}>
          <Text size={'xl'} fw={900} mb={'lg'}>
            🍀 Hey Folks
          </Text>
          <Text mb={'md'}>Hey, I&apos;m Higor Alves, I started as a Developer back in 2015, working with C.</Text>
          <Text mb={'md'}>
            Early on in my career I decided I wanted to be an expert. So I set my mind on mastering the world&apos;s
            most popular programming language. I spent countless hours writing JavaScript for the companies I worked for
            as well as in the evenings for open source and other side projects.
          </Text>
          <Text>When I&apos;m not programming, you can find me playing Games, traveling and doing BBQ 🍖!</Text>
        </Grid.Col>
      </Grid>

      <Box mt={'xl'}>
        <Title order={3}>Bio</Title>
        <Text c={'dimmed'} mb={'lg'} fw={'thin'}>
          This is made for journalists, podcast hosts, and event organizers to copy-and-paste.
        </Text>
        <Blockquote color="gray">{quote}</Blockquote>
      </Box>
    </Container>
  )
}
