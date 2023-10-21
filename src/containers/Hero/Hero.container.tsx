'use client'
import { Button, Center, Container, Flex, Grid, Space, Text, Title } from '@mantine/core'
import Image from 'next/image'

export function Hero() {
  return (
    <Center h={'95vh'}>
      <Container size={'lg'}>
        <Grid align={'center'}>
          <Grid.Col span={6}>
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

          <Grid.Col span={4}>
            <Image src={'/images/me/higor-with-tech-around.png'} alt={'Help'} width={400} height={400} />
          </Grid.Col>
        </Grid>

        <Space h={120} />

        <Text c={'dimmed'} tt={'uppercase'} ta={'center'} mb={'xl'} size={'sm'}>
          HELPING PEOPLE & COMPANIES CREATE BEAUTIFUL PLATFORMS AT
        </Text>
        <Flex justify={'space-between'}>
          <Image src="/images/companies/feature/ask.svg" width={134} height={48} alt="Panda" />
          <Image src="/images/companies/feature/bubbles.svg" width={114} height={48} alt="Panda" />
          <Image src="/images/companies/feature/tiled.svg" width={114} height={48} alt="Panda" />
          <Image src="/images/companies/feature/unesco.svg" width={114} height={48} alt="Panda" />
          <Image src="/images/companies/feature/xteam.svg" width={114} height={48} alt="Panda" />
        </Flex>
      </Container>
    </Center>
  )
}
