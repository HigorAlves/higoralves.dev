'use client'
import { Button, Center, Container, Grid, RingProgress, Space, Text, Title } from '@mantine/core'
import Image from 'next/image'

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

          <Grid.Col span={{ md: 4, sm: 0 }} visibleFrom={'md'}>
            <RingProgress
              size={400}
              thickness={14}
              roundCaps
              sections={[
                { value: 25, color: 'green' },
                { value: 25, color: 'yellow' },
                { value: 25, color: 'blue' },
                { value: 25, color: 'orange' },
              ]}
            />
            {/* <Image src={'/images/me/higor-with-tech-around.png'} alt={'Help'} width={400} height={400} /> */}
          </Grid.Col>
        </Grid>

        <Space h={120} />

        <Text c={'dimmed'} tt={'uppercase'} ta={'center'} mb={'xl'} size={'sm'}>
          HELPING PEOPLE & COMPANIES CREATE BEAUTIFUL PLATFORMS AT
        </Text>
        <Grid justify={'space-between'}>
          <Grid.Col span={{ md: 2, sm: 6 }}>
            <Image src="/images/companies/logos/dark/ask.svg" width={134} height={48} alt="Ask Media Group logo" />
          </Grid.Col>
          <Grid.Col span={{ md: 2, sm: 6 }}>
            <Image src="/images/companies/logos/dark/bubbles.svg" width={114} height={48} alt="Bubbles logo" />
          </Grid.Col>
          <Grid.Col span={{ md: 2, sm: 6 }}>
            <Image src="/images/companies/logos/dark/tiled.svg" width={114} height={48} alt="Tiled CO logo" />
          </Grid.Col>
          <Grid.Col span={{ md: 2, sm: 6 }}>
            <Image src="/images/companies/logos/dark/unesco.svg" width={114} height={48} alt="Unesco logo" />
          </Grid.Col>
          <Grid.Col span={{ md: 2, sm: 6 }}>
            <Image src="/images/companies/logos/dark/xteam.svg" width={114} height={48} alt="Xteam logo" />
          </Grid.Col>
        </Grid>
      </Container>
    </Center>
  )
}
