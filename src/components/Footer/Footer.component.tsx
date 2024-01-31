import React from 'react'
import { ActionIcon, Container, Flex, Group, NavLink } from '@mantine/core'
import { IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react'
import Link from 'next/link'
import { Logo } from '~/components'

const links = [
  { link: '/contact', label: 'Contact' },
  { link: '/privacy', label: 'Privacy' },
  { link: '/articles', label: 'Articles' },
]

export function Footer() {
  const items = links.map((link) => <NavLink key={link.link} component={Link} href={link.link} label={link.label} />)

  return (
    <Container size={'lg'} pb={'xl'}>
      <Flex align={'center'} justify={'space-between'}>
        <Logo />

        <Flex align={'center'} visibleFrom={'sm'}>
          {items}
        </Flex>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="transparent" radius="xl" color={'white'}>
            <IconBrandInstagram size={18} stroke={1} />
          </ActionIcon>
          <ActionIcon size="lg" variant="transparent" radius="xl" color={'white'}>
            <IconBrandLinkedin size={18} stroke={1} />
          </ActionIcon>
          <ActionIcon size="lg" variant="transparent" radius="xl" color={'white'}>
            <IconBrandYoutube size={18} stroke={1} />
          </ActionIcon>
        </Group>
      </Flex>
    </Container>
  )
}
