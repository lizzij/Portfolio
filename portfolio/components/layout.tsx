import Footer from './footer'
import Menu from './menu'
import Meta from './meta'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Menu/>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
