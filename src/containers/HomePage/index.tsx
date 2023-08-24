'use client'

import { Join, Layout } from '~/components'
import { Collaboration } from './Collaboration'
import Hero from './Hero'
import HowItWorks from './HowItWorks'

export function HomePage() {
  return (
    <Layout>
      <Hero />
      <Collaboration />
      <HowItWorks />
      <Join />
    </Layout>
  )
}
