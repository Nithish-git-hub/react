import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Recepies from './components/Recepies/Recepies'
import Recepiedetails from './components/Recepies/Recepiedetails'
import Cart from './components/Navbar/Cart'
import Wishlist from './components/Navbar/Wishlist'
import {Routes,Route} from 'react-router-dom'
import './App.css'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/recepies' element={<Recepies/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path="/recepies/:id" element={<Recepiedetails />} />

      </Routes>
    </div>
  )
}

export default App