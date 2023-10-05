'use client'
import React from 'react'
import { AppShell, Burger, Container, Flex, Group, NavLink, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  { link: '/', label: 'Home' },
  { link: '/articles', label: 'Articles' },
  { link: '/projects', label: 'Projects' },
]

export function Header() {
  const [opened, { toggle }] = useDisclosure(false)

  const items = links.map((link) => (
    <Link href={link.link} key={link.link} passHref>
      <NavLink label={link.label} />
    </Link>
  ))

  return (
    <AppShell.Header withBorder={false}>
      <Container size="lg" pt={'md'}>
        <Group justify={'space-between'}>
          <Flex align={'center'}>
            <Image src={'/images/logo.svg'} width={40} height={40} alt={'Higor Alves logo'} />
            <Text c={'white'} pl={'sm'}>
              Higor Alves
            </Text>
          </Flex>

          <Flex align={'center'} visibleFrom={'sm'}>
            {items}
          </Flex>

          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </Container>
    </AppShell.Header>
  )
}
