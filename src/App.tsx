import { Routes, Route } from 'react-router-dom'
import path from './Utils/path'
import { Home, Layout, Login, Register, Shop, Product, Blogs } from './Pages/Public'
import './Responsive.css'
import './App.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path={path.PUBLIC} element={<Layout />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.SHOP} element={<Shop />} />
          <Route path={path.PRODUCT} element={<Product />} />
          <Route path={path.BLOG} element={<Blogs />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.REGISTER} element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
