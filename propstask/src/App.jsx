import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Recepies from './components/Recepies/Recepies'
import {Routes,Route} from 'react-router-dom'
import './App.css'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/products' element={<Products/>}/>
        <Route path='/recepies' element={<Recepies/>}/>
      </Routes>
    </div>
  )
}

export default App