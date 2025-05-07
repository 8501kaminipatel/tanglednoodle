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
import Product5 from '../COMPONENTES/Product5'
import Product6 from '../COMPONENTES/Product6'
import Product7 from '../COMPONENTES/Product7'
import Product8 from '../COMPONENTES/Product8'
import Product9 from '../COMPONENTES/Product9'
import Product10 from '../COMPONENTES/Product10'
import Product11 from '../COMPONENTES/Product11'
import Product12 from '../COMPONENTES/Product12'
import Product13 from '../COMPONENTES/Product13'
import Product14 from '../COMPONENTES/Product14'
import InsightsChart from '../COMPONENTES/chart'

 




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
      <Route path="/product5" element={<Product5 />} />
      <Route path="/product6" element={<Product6 />} />
      <Route path="/product7" element={<Product7 />} />
      <Route path="/product8" element={<Product8 />} />
      <Route path="/product9" element={<Product9 />} />
      <Route path="/product10" element={<Product10 />} />
      <Route path="/product11" element={<Product11 />} />
      <Route path="/product12" element={<Product12 />} />
      <Route path="/product13" element={<Product13 />} />
      <Route path="/product14" element={<Product14 />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/chart" element={< InsightsChart/>} />
   
      <Route path="/description/:id" element={
        <Privatepage>
          <Description />
      
        </Privatepage>
      } />
       

    </Routes>
  )
}

export default Allroutes