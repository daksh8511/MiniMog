import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header/Header'
import AddingProduct from './Components/AddingProduct/AddingProduct'
import Footer from './Components/Footer/Footer'
import Wishlist from './Pages/Wishlist'
import SignUp from './Pages/SignUp'
import Account from './Pages/Account'
import ProductView from './Pages/ProductView'
import AllWatches from './Pages/AllWatches'
import FilterWatch from './Pages/FilterWatch'
import OTPBox from './Pages/OTPBox'
import User from './Pages/User/User'

const App = () => {

  return (
    <div className='container relative'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adding' element={<AddingProduct />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/account' element={<Account />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/otp' element={<OTPBox />} />
        <Route path='/product_view/:id' element={<ProductView />} />
        <Route path='/all_watches' element={<AllWatches />} />
        <Route path='/filterWatch/:watchtype' element={<FilterWatch />} />
        <Route path='/user/:user' element={<User />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App