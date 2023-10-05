'use client'
import type { NextPage } from 'next'
import { Button, Center, Container, Flex, Space, Text, Title } from '@mantine/core'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Center h={'70vh'}>
      <Container>
        <Title c={'white'} ta={'center'} mb={'lg'}>
          Roaming Routes, Rolling Code the adventures of a developer
        </Title>

        <Title c={'dimmed'} ta={'center'} order={4}>
          Delivering top-tier tech solutions, inspired by diverse cultures and fueled by a nomadic lifestyle.
        </Title>

        <Space h={'xl'} />

        <Center>
          <Button variant={'outline'} tt={'uppercase'}>
            Read the Blog
          </Button>
        </Center>
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
