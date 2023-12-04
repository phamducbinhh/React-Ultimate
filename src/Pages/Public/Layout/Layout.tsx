import { Outlet } from 'react-router-dom'
import Footer from '~/Components/Footer'
import Nav from '~/Components/Nav'
const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
