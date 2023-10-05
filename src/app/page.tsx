import type { NextPage } from 'next'
import { About, Hero } from '~/containers'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  )
}

export default Home
