import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='alldata'>
        <h1>RHEO MART</h1>
        <div className='navbar'>
            <Link to="/products" className="nav-link"><div>Products</div></Link>
            <Link to="/recepies" className="nav-link"><div>Recepies</div></Link>
        </div>
          
    </div>
  )
}

export default Navbar