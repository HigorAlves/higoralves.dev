'use client'

import Join from '~/components/Join'
import Layout from '~/components/Layout'
import Services from '~/components/Services'
import Benefits from './Benefits'
import Collaboration from './Collaboration'
import Features from './Features'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import Pricing from './Pricing'
import Roadmap from './Roadmap'
import Testimonials from './Testimonials'

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Benefits />
      <Features />
      <Collaboration />
      <HowItWorks />
      <Services />
      <Pricing />
      <Testimonials />
      <Roadmap />
      <Join />
    </Layout>
  )
}

export default HomePage
