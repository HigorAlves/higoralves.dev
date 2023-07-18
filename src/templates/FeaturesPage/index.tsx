'use client'

import Join from '~/components/Join'
import Layout from '~/components/Layout'
import Services from '~/components/Services'
import Benefits from './Benefits'
import Community from './Community'
import Features from './Features'
import Hero from './Hero'

const FeaturesPage = () => {
  return (
    <Layout>
      <Hero />
      <Benefits />
      <Features />
      <Community />
      <Services containerClassName="md:pb-10" />
      <Join />
    </Layout>
  )
}

export default FeaturesPage
