import { Routes, Route } from 'react-router-dom'
import path from './Utils/path'
import { Home, Layout, Login, Register, Shop, Product, Blogs, Contact, ProductDetail } from './Pages/Public'
import './Responsive.css'
import './App.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ModalView from './Components/ModalView'
import { useAppSelector } from './Redux/Hooks'

const App = () => {
  const modalOpen = useAppSelector((state) => state.modal.isOpen)
  const modalData = useAppSelector((state) => state.modal.modalData)
  return (
    <>
      <Routes>
        <Route path={path.PUBLIC} element={<Layout />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.SHOP} element={<Shop />} />
          <Route path={path.PRODUCT} element={<Product />} />
          <Route path={path.PRODUCTBYID} element={<ProductDetail />} />
          <Route path={path.BLOG} element={<Blogs />} />
          <Route path={path.CONTACT} element={<Contact />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.REGISTER} element={<Register />} />
        </Route>
      </Routes>
      {modalOpen && <ModalView toggleModal={modalOpen} item={modalData}></ModalView>}
    </>
  )
}

export default App
