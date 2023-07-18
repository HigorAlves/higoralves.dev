'use client'

import Join from '~/components/Join'
import Layout from '~/components/Layout'
import Community from './Community'
import Comparison from './Comparison'
import Faq from './Faq'
import Pricing from './Pricing'

const PricingPage = () => {
  return (
    <Layout>
      <Pricing />
      <Comparison />
      <Community />
      <Faq />
      <Join />
    </Layout>
  )
}

export default PricingPage
