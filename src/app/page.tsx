'use client'
import type { NextPage } from 'next'
import { AppShell, Button, Center, Container, Flex, NavLink, rem, Space, Text, Title } from '@mantine/core'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <AppShell.Header withBorder={false}>
        <Container fluid px={'xl'} pt={'sm'}>
          <Flex align={'center'} justify={'space-between'}>
            <Flex align={'center'}>
              <Image src={'/images/logo.svg'} width={40} height={40} alt={'Higor Alves logo'} />
              <Text c={'white'} pl={'sm'}>
                Higor Alves
              </Text>
            </Flex>

            <Flex>
              <NavLink label={'About'} />
              <NavLink label={'Articles'} />
              <NavLink label={'Projects'} />
              <NavLink label={'Uses'} />
              <NavLink label={'Reminder'} />
            </Flex>
          </Flex>
        </Container>
      </AppShell.Header>

      <AppShell.Main pt={`calc(${rem(80)} + var(--mantine-spacing-md))`}>
        <Container>
          <Title c={'white'} ta={'center'} mb={'lg'}>
            Roaming Routes, Rolling Code the adventures of adeveloper
          </Title>

          <Title c={'dimmed'} ta={'center'} order={4}>
            Delivering top-tier tech solutions, inspired by diverse cultures and fueled by a nomadic lifestyle.
          </Title>

          <Space h={'xl'} />

          <Center>
            <Button variant={'outline'} tt={'uppercase'}>
              Get Inspired
            </Button>
          </Center>
          <Space h={'xl'} />

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
      </AppShell.Main>
    </>
  )
}

export default Home
