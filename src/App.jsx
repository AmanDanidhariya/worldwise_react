import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Pricing from './pages/Pricing'
import HomePage from './pages/Homepage'
import Product from './pages/Product'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'

function App() {

  return (
    <>

       <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="product" element={<Product/>}/>
              <Route path="pricing" element={<Pricing/>}/>
              <Route path="app" element={<AppLayout/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="*" element={<PageNotFound/>}/>
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App