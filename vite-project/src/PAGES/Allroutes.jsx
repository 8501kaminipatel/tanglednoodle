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
import ProductList from '../COMPONENTES/product'

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Myntra/>} />
          <Route path="/men" element={<Men/>} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/home" element={<Home />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/genz" element={<GENZ />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<ProductList />} />
     
      </Routes>
  )
}

export default Allroutes