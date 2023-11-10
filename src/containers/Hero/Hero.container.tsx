'use client'
import { Box, Button, Center, Container, Grid, RingProgress, Space, Text, Title } from '@mantine/core'
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

          <Grid.Col span={{ md: 4, sm: 0 }} visibleFrom={'md'} style={{ position: 'relative' }}>
            <RingProgress size={400} thickness={7} roundCaps sections={[{ value: 100, color: 'indigo' }]} />
            <Image
              src={'/images/me/Profile.jpeg'}
              alt={''}
              width={340}
              height={340}
              style={{ position: 'absolute', top: '9%', left: '9%', borderRadius: '100%' }}
            />
            <Box
              bg="white"
              style={{
                height: 50,
                width: 50,
                borderRadius: 50,
                position: 'absolute',
                top: 50,
                left: 60,
                animation: 'float 2s infinite',
              }}
            ></Box>
            <Box
              bg="white"
              style={{
                height: 50,
                width: 50,
                borderRadius: 50,
                position: 'absolute',
                top: 50,
                left: 60,
                animation: 'float 2.5s infinite',
              }}
            ></Box>

            <Box
              bg="white"
              style={{
                height: 50,
                width: 50,
                borderRadius: 50,
                position: 'absolute',
                top: 50,
                right: 60,
                animation: 'float 2s infinite',
              }}
            ></Box>
            <Box
              bg="white"
              style={{
                height: 50,
                width: 50,
                borderRadius: 50,
                position: 'absolute',
                top: 50,
                right: 60,
                animation: 'float 2.5s infinite',
              }}
            ></Box>
            <Box
              bg="white"
              style={{
                height: 50,
                width: 50,
                borderRadius: 50,
                position: 'absolute',
                bottom: 50,
                left: 60,
                animation: 'float 2s infinite',
              }}
            ></Box>
            <Box
              bg="white"
              style={{
                height: 50,
                width: 50,
                borderRadius: 50,
                position: 'absolute',
                bottom: 50,
                left: 60,
                animation: 'float 2.5s infinite',
              }}
            ></Box>

            <Box
              bg="white"
              style={{
                height: 50,
                width: 50,
                borderRadius: 50,
                position: 'absolute',
                bottom: 50,
                right: 60,
                animation: 'float 2s infinite',
              }}
            ></Box>
            <Box
              bg="white"
              style={{
                height: 50,
                width: 50,
                borderRadius: 50,
                position: 'absolute',
                bottom: 50,
                right: 60,
                animation: 'float 2.5s infinite',
              }}
            ></Box>
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
