'use client'
import { Button, Center, Container, Grid, Space, Text, Title } from '@mantine/core'
import Image from 'next/image'
import { RingPhoto } from '~/components'

export function Hero() {
  return (
    <Center h={'95vh'}>
      <Container size={'lg'}>
        <Grid align={'center'} justify={'center'} grow>
          <Grid.Col span={{ md: 6, sm: 12 }}>
            <Text
              component={Title}
              c={'white'}
              ta={'center'}
              mb={'xs'}
              variant="gradient"
              gradient={{ from: 'violet', to: 'indigo', deg: 90 }}
            >
              Adventures of a developer
            </Text>

            <Text c={'dimmed'} ta={'left'} fw={'bold'}>
              Delivering top-tier tech solutions, inspired by a nomadic lifestyle.
            </Text>

            <Space h={'xl'} />

            <Center>
              <Button variant={'light'}>Take a look on my Work 🏂</Button>
            </Center>
          </Grid.Col>

          <Grid.Col span={{ md: 4, sm: 0 }} visibleFrom={'md'} style={{ position: 'relative' }}>
            <RingPhoto />
          </Grid.Col>
        </Grid>

        <Space h={120} />

        <Text c={'dimmed'} tt={'uppercase'} ta={'center'} mb={'xl'} size={'sm'}>
          HELPING PEOPLE & COMPANIES CREATE BEAUTIFUL PLATFORMS AT
        </Text>
        <Grid justify={'space-between'} visibleFrom={'md'}>
          <Grid.Col span={{ md: 2, sm: 6 }}>
            <Image src="/images/companies/logos/dark/unesco.svg" width={124} height={50} alt="Ask Media Group logo" />
          </Grid.Col>
          <Grid.Col span={{ md: 2, sm: 6 }}>
            <Image src="/images/companies/logos/dark/ask.svg" width={90} height={50} alt="Bubbles logo" />
          </Grid.Col>
          <Grid.Col span={{ md: 2, sm: 6 }}>
            <Image src="/images/companies/logos/dark/arctouch.svg" width={120} height={50} alt="Tiled CO logo" />
          </Grid.Col>
          <Grid.Col span={{ md: 2, sm: 6 }}>
            <Image src="/images/companies/logos/dark/xteam.svg" width={100} height={50} alt="Unesco logo" />
          </Grid.Col>
          <Grid.Col span={{ md: 2, sm: 6 }}>
            <Image src="/images/companies/logos/dark/bubbles.svg" width={100} height={50} alt="Xteam logo" />
          </Grid.Col>
        </Grid>
      </Container>
    </Center>
  )
}
