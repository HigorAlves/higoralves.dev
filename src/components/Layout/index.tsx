import { ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'

type LayoutProps = {
  hideFooter?: boolean
  children: ReactNode
}

const Layout = ({ hideFooter, children }: LayoutProps) => (
  <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
    <Header />
    {children}
    {hideFooter ? null : <Footer />}
  </div>
)

export default Layout
