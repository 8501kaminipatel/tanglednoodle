import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Myntra from '../COMPONENTES/Myntra'
import Men from '../COMPONENTES/Men'
import Women from '../COMPONENTES/Women'
import Kids from '../COMPONENTES/Kids'
import Home from '../COMPONENTES/Home'
import Beauty from '../COMPONENTES/Beauty'
import GENZ from '../COMPONENTES/GENZ'
import Studio from '../COMPONENTES/Studio'
import Login from '../COMPONENTES/Login'
import Description from '../COMPONENTES/Description'
import Privatepage from './Privatepage'
import CartPage from '../COMPONENTES/Addcart'
import Product from '../COMPONENTES/product'
import Product1 from '../COMPONENTES/Product1'
import Product2 from '../COMPONENTES/Product2'
import Product3 from '../COMPONENTES/Product3'
import Product4 from '../COMPONENTES/Product4'




const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Myntra />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/home" element={<Home />} />
      <Route path="/beauty" element={<Beauty />} />
      <Route path="/genz" element={<GENZ />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product1" element={<Product1 />} />
      <Route path="/product2" element={<Product2 />} />
      <Route path="/product3" element={<Product3 />} />
      <Route path="/product4" element={<Product4 />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/description/:id" element={
        <Privatepage>
          <Description />
      
        </Privatepage>
      } />
       

    </Routes>
  )
}

export default Allroutes