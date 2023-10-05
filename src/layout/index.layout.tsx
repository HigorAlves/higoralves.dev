import React from 'react'
import { BasicLayout } from './basic.layout'

interface Props {
  layout: 'basic'
  header?: React.ReactNode
  main: React.ReactNode
}

export function Layout({ layout, header, main }: Props) {
  const layouts = {
    basic: <BasicLayout header={header} main={main} />,
  }

  return layouts[layout] || <BasicLayout header={header} main={main} />
}
