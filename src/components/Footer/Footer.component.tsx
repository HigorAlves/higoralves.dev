import React from 'react'
import { ActionIcon, Container, Flex, Group, NavLink, rem, Text } from '@mantine/core'
import { IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Privacy' },
  { link: '#', label: 'Articles' },
]

export function Footer() {
  const items = links.map((link) => (
    <Link href={link.link} key={link.label}>
      <NavLink label={link.label} />
    </Link>
  ))

  return (
    <Container size={'lg'} pb={'xl'}>
      <Flex align={'center'} justify={'space-between'}>
        <Flex align={'center'}>
          <Image src={'/images/logo.svg'} width={40} height={40} alt={'Higor Alves logo'} />
          <Text c={'white'} pl={'sm'}>
            Higor Alves
          </Text>
        </Flex>

        <Group>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Flex>
    </Container>
  )
}
