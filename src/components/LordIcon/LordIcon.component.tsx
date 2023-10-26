'use client'
import { defineElement } from '@lordicon/element'
import lottie from 'lottie-web'

type LordIconTrigger = 'hover' | 'click' | 'loop' | 'loop-on-hover' | 'morph' | 'morph-two-way'

type LordIconColors = {
  primary?: string
  secondary?: string
}

type Props = {
  icon: string
  trigger?: LordIconTrigger
  colors?: LordIconColors
  delay?: number
  size?: number
}

defineElement(lottie.loadAnimation)

export function LordIcon({ icon }: Props) {
  return <lord-icon trigger="hover" src={icon} color={'white'} style={{ height: 45, width: 45 }}></lord-icon>
}
