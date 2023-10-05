'use client'
import type { NextPage } from 'next'
import { Button, Center, Container, Flex, Grid, Space, Text, Title } from '@mantine/core'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Center h={'90vh'}>
      <Container size={'lg'}>
        <Grid align={'center'}>
          <Grid.Col span={6}>
            <Title c={'white'} ta={'center'} mb={'lg'}>
              Adventures of a developer
            </Title>

            <Title c={'dimmed'} ta={'center'} order={4}>
              Delivering top-tier tech solutions, inspired by a nomadic lifestyle.
            </Title>

            <Space h={'xl'} />

            <Center>
              <Button variant={'outline'} tt={'uppercase'}>
                Read the Blog
              </Button>
            </Center>
          </Grid.Col>

          <Grid.Col span={4}>
            <Image src={'/images/help/help.png'} alt={'Help'} width={450} height={350} />
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

export default Home
