'use client'

import Join from '~/components/Join'
import Layout from '~/components/Layout'
import { Collaboration } from './Collaboration'
import Hero from './Hero'
import HowItWorks from './HowItWorks'

export function HomePage() {
  return (
    <Layout>
      <Hero />
      <Collaboration />
      <HowItWorks />
      {/* <Testimonials /> */}
      <Join />
    </Layout>
  )
}
