import { ReactNode } from 'react'
import { Navbar } from '~/components'
import Footer from '../Footer'

type LayoutProps = {
  hideFooter?: boolean
  children: ReactNode
}

const Layout = ({ hideFooter, children }: LayoutProps) => (
  <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
    <Navbar />
    {children}
    {hideFooter ? null : <Footer />}
  </div>
)

export default Layout
