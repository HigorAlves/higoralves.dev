import { Container, Text, Title } from '@mantine/core'

export default function About() {
  return (
    <Container size={'lg'} mt={'xl'}>
      <Text
        component={Title}
        order={1}
        fw={900}
        variant="gradient"
        gradient={{ from: 'orange', to: 'yellow', deg: 90 }}
      >
        Explore. Create. Share.
      </Text>
      <Text c={'dimmed'}>
        I make the world a better place by teaching people like you how to make quality software.
      </Text>
    </Container>
  )
}
