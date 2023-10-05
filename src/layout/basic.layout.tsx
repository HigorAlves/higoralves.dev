'use client'
import React from 'react'
import { AppShell } from '@mantine/core'
import { Header } from '~/components'

interface Props {
  main: React.ReactNode
}

export function BasicLayout({ main }: Props) {
  return (
    <AppShell header={{ height: 70 }}>
      <Header />

      <AppShell.Main>{main}</AppShell.Main>
    </AppShell>
  )
}
