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
              <Route index element={<HomePage/>}/>
              <Route path="product" element={<Product/>}/>
              <Route path="pricing" element={<Pricing/>}/>
              <Route path="app" element={<AppLayout/>}>
                <Route index element={<h1>List of cities</h1>}/>
                <Route path="cities" element={<p>List of all cities</p>}/>
                <Route path="countries" element={<p>List of Countries</p>}/>
                <Route path="form" element={<p>Form</p>}/>
              </Route>
              <Route path="login" element={<Login/>}/>
              <Route path="*" element={<PageNotFound/>}/>
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
