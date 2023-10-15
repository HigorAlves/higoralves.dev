'use client'
import React from 'react'
import { AppShell, Burger, Container, Flex, Group, NavLink } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import { Logo } from '~/components'

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/articles', label: 'Articles' },
  { link: '/projects', label: 'Projects' },
]

export function Header() {
  const [opened, { toggle }] = useDisclosure(false)

  const items = links.map((link) => <NavLink key={link.link} component={Link} href={link.link} label={link.label} />)

  return (
    <AppShell.Header withBorder={false}>
      <Container size="lg" pt={'md'}>
        <Group justify={'space-between'}>
          <Logo />

          <Flex align={'center'} visibleFrom={'sm'}>
            {items}
          </Flex>

          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </Container>
    </AppShell.Header>
  )
}
