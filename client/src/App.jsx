import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header/Header'
import AddingProduct from './Components/AddingProduct/AddingProduct'

const App = () => {


  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adding' element={<AddingProduct />} />
      </Routes>
    </div>
  )
}

export default App