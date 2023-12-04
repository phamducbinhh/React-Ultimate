import { Routes, Route } from 'react-router-dom'
import path from './Utils/path'
import { Home, Layout, Login, Register } from './Pages/Public'
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path={path.PUBLIC} element={<Layout />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.REGISTER} element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
