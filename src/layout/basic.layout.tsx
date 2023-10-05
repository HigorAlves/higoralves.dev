'use client'
import React from 'react'
import { AppShell, Container, Flex, NavLink, rem, Text } from '@mantine/core'
import Image from 'next/image'

interface Props {
  header?: React.ReactNode
  main: React.ReactNode
}

export function BasicLayout({ header, main }: Props) {
  return (
    <AppShell header={{ height: 44 }}>
      <AppShell.Header withBorder={false}>
        {
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
        }
      </AppShell.Header>

      <AppShell.Main pt={`calc(${rem(80)} + var(--mantine-spacing-md))`} style={{ height: 'calc(100vh-60px)' }}>
        {main}
      </AppShell.Main>
    </AppShell>
  )
}
